
            function generateImage(url) {
                var a = document.createElement('a');
                a.href = url;

                var img = document.createElement('img');
                img.alt = "img";
                img.src=url;

                var ogwidth = img.width;

                img.width="400";

                img.height= img.height/(ogwidth/img.width);

                a.appendChild(img);
                document.getElementById('lightgallery').appendChild(a);
        } 
        
            function imageExists(url) {
            return new Promise(resolve => {
                var img = new Image()
                img.addEventListener('load', () => resolve(true))
                img.addEventListener('error', () => resolve(false))
                img.src = url
            })
            }

            dir= "immagini/";
            num= 0;
            filetype= ".png";
            url = dir + String(num) + filetype;

            isGenerated = false;
            
            do{
                isGenerated = false;
                imageExists(url).then(ok => {
                    console.log(`RESULT: exists=${ok}`)
                    if (ok == true){
                        generateImage(url);
                        num++;
                        url = dir + String(num) + filetype;
                        isGenerated = true;
                    }
                })
            }while(isGenerated == true);