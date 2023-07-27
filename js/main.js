var a = prompt('enter name'); 
    document.write(`input ${a}<br>`);
		
		var count =0;
		var y=""
		
		for(i=0; i<a.length; i++){
			if(a[i]=='a'|| a[i]=='e'|| a[i]=='i'|| a[i]=='o'|| a[i]=='u'||a[i]=='A'|| a[i]=='E'|| a[i]=='I'|| a[i]=='O'|| a[i]=='U'){
				count++;
				y+=a[i]
			}
		}
document.write(`vowels count ${count} <br>`)
document.write(`vowels ${y}`)
