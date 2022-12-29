function umairshadow(options){
     let images= document.querySelectorAll('.umairshadow');

     if (options.shadow_type === 'hard')
     options.shadowtype = '0px'
     else
     options.shadow.type = "15px";

     images.forEach(images => {
        images.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba{0,0,0,0.2}`;

        if (options.padding){
            Image.style.padding = '1em';
        }
     } )
}
module.export.umairshadow = umairshadow;