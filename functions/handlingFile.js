exports.handlingFile = async (files) =>{

  let fileData= {msg:'none',statusCode:200,files:{adhar:"" ,pancard:"", cancelCheque:""} };

  if(files.adhar){
    let dataParts = files.adhar.split(',');
    let fileInfo = dataParts[0].split(':')[1];
    let fileType = fileInfo.split(';')[0];
    let encoding = fileInfo.split(';')[1];
    console.log(fileType,encoding);
    if(fileType == 'application/pdf' && encoding == 'base64'){
      dataParts[1] = Buffer.from(dataParts[1], 'base64');
      console.log( 'here :',typeof(dataParts[1]))
      fileData.files.adhar = dataParts[1];
      return fileData;
    } else {
      fileData = {statusCode:400,files:{},msg:'please send a pdf file'}
      return fileData;
    }
  }
  else{
     fileData = {statusCode:400,files:{},msg:'please send all the files'}
     return fileData;
  }

  
}