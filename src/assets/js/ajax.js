const apiMethods = {
    methods: {
        apiPost(url, data) {
            return new Promise((resolve, reject) => {
                axios.post(url, data).then((response) => {
                    resolve(response.data)
                }).catch((response) => {
                    resolve(response)
                    console.log(response)
                })
            })
        },
        handelResponse(res, cb, errCb) {
            if (res.code == 1) {
	            // console.log(_g.j2s(res.data))
                cb(res.data)
            }else {
                if (typeof errCb == 'function') {
                    errCb()
                }
                this.handleError(res)
            }
        },
        handleError(res) {
	        console.log(res,'hangdleerror')
        },
        resetCommonData(data) {
            
        },
        reAjax(url, data) {
            return new Promise((resolve, reject) => {
                axios.post(url, data).then((response) => {
                    resolve(response.data)
                }, (response) => {
                    reject(response)
                    console.log(response)
                })
            })
        }
    }
}

export default apiMethods
