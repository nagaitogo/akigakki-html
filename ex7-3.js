function bmi() {var a = document.getElementById('taijuu').value;
                var b = document.getElementById('sintyou').value;
                var c = Number(a) / (Number(b) * Number(b));
                if (c < 18.5) { alert('BMI' + c +'kg/m²' + '低体重');}
                else { if(c < 25) { alert('BMI' + c + 'kg/m²' + '普通');}
                      else { alert('BMI' + c + 'kg/m²' + '肥満');}}}
                
              　
