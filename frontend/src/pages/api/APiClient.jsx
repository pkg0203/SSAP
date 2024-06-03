import axios from 'axios'

// Axios 인스턴스 생성
const APiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 10000, // 요청 타임아웃
})

// 요청 인터셉터:모든 요청에 대해 실행되며,
// 로컬 스토리지에서 accessToken을 가져와 요청 헤더에 Authorization 토큰을 추가합니다.
APiClient.interceptors.request.use(
    (config) => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            config.headers['Authorization'] = `Bearer ${access_token}`
        }
        return config
    },
    (error) => Promise.reject(error),
)

// 응답 인터셉터
//응답에서 에러가 발생했을 때 실행됩니다. 
//특히 401 에러(인증 오류) 발생 시 토큰을 갱신하고, 실패 시 로그인 페이지로 리디렉션합니다.
APiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        // 재전송 방지용 플래그
        originalRequest._retry = originalRequest._retry || false

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const refresh = localStorage.getItem('refresh_token')
            console.log(refresh)
            if (refresh) {
                try {
                    const response = await axios.post('http://127.0.0.1:8000/ssap/accounts/token/refresh/', {
                        refresh: refresh,
                    })
                    const access_token = response.data.access
                    const refresh_token = response.data.refresh
                    localStorage.setItem('access_token', access_token)
                    localStorage.setItem('refresh_token', refresh_token)

                    originalRequest.headers['Authorization'] = `Bearer ${access_token}`
                    return APiClient(originalRequest)
                } catch (refreshError) {
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('refresh_token')
                    if (window.location.pathname !== 'ssap/accounts/login/') {
                        const currentUrl = encodeURIComponent(window.location.pathname + window.location.search)
                        window.location.href = `ssap/accounts/login/?redirectUrl=${currentUrl}`
                        return Promise.reject(refreshError)
                    }
                }
            } else {
                if (window.location.pathname !== 'ssap/accounts/login/') {
                    const currentUrl = encodeURIComponent(window.location.pathname + window.location.search)
                    window.location.href = `ssap/accounts/login/?redirectUrl=${currentUrl}`
                    return Promise.reject(error)
                }
            }
        }
        return Promise.reject(error)
    },
)

export default APiClient