
let defaultOptions = {
    url:'',
    method:'POST',
    mode: 'cors',
    headers:{
        'Access-Control-Allow-Origin':'*'
    },
    body:null,
};

let  UploadFile=function(options){

    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'multipart/form-data'
    });
    let opt = Object.assign({}, defaultOptions, options); //将默认的参数和传过来的合并在一起
    let sentData={
        method:opt.method,
        mode: 'cors',
        header: header,
        body:opt.body || ''
    };
    return new Promise((reslove,reject)=>{
        fetch(opt.url, sentData)
            .then(response=> response.json())
            .then(responseText=>{
                let resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
                //console.log(resp);
                reslove(resp); //这个resp会被外部接收
            }).catch(err=>{
            //console.log(err);
            reject(err);
        });
    }).catch(err => {
            console.log('出错了');
        });
}
export default UploadFile;

