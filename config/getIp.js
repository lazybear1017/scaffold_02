const os = require('os')

module.exports = {
  getIp: () => {
    const hostObj = {
      host: '',
      ipv4Ip: ''
    }
    try {
      const netWorkList = os.networkInterfaces()
      for (const i in netWorkList) {
        const item = netWorkList[i]
        for (let j = 0; j < item.length; j++) {
          const data = item[j]
          if (data.family === 'IPv4' && data.address !== '127.0.0.1' && !data.internal) {
            if (data.address.indexOf('192.168') < 0) {
              hostObj.host = data.address
            } else {
              hostObj.ipv4Ip = data.address
            }
          }
        }
      }
    } catch (e) {
      hostObj.host = 'localhost'
      hostObj.ipv4Ip = 'localhost'
    }
    return hostObj
  }
}
