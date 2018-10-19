// if ที่อยู๋นอกสุดจะถูกพิจารณาก่อน
// var x =1;
// var y =0;

// if(y != 0){
//     if(x > y){
//         document.write("x / y =" + (x/y));
//     }
// }else{
//     document.write("ตัวหารต้องไม่เป็น 0 นะคะ");
// }

//การเปรียบเทียบเงื่อนไขด้วย Ternary Operator if(สั้น)
// a = (1>0) ? true : false; //a จะมีค่าเป็น true เนื่องจาก 1 > 0 นั้นเป็นจริง
// b = (x % 2 == 0) ? "Even" : "Odd";
// //หาก x หารด้วย 2 ลงตัว b จะเท่ากับ "Even" แต่หากหารไม่ลงตัว b จะเท่ากับ "Odd"

// //หรือเขียนแบบ if ได้เป็น
// if(x % 2 == 0){
//     b = "Even";
// }
// else {
//     b = "Odd";
// }

// var size = 5; 
// switch(size){ //สิ่งที่ต้องการตรวจสอบ
//     case 4: //ค่าที่ 1
//     document.write("small"); break; //คำสั่ง
//     case 5:
//     document.write("medium"); break;

//     case 6:
//     document.write("big"); break;

//     default:
//     document.write("Unknown"); ในกรณีไม่ตรงกับกรณีไดเลย
// }

// //การใช้ลูป for
// //ลูปแบบ for เป็นการทำงานแบบซ้ำๆ ตามเงื่อนไขที่กำหนด
// for(ตัวแปร = ค่าเริ่มต้น; เงื่อนไข; การเปลียนค่าตัวแปร){
//     //คำสั่ง
// }
var print_data = document.getElementById("print_data");

// var sum = 0;
// for(i = 0; i<= 10; i-=10){
//     var gg = sum += i;
    
//     console.log(sum);
// }

// var sum = 0;
// for(a = 100; a >=1; a-=10){
//     sum += a;
//     console.log(sum);
// }
//ลูปซ้อนลูป ห้ามใช้ตัวแปร counter เป็นตัวเดียวกัน
for(i = 1; i<=3; i++){

    document.write("บทที่" + i + "<br>")

    for(j = 1; j<=3; j++){

        document.write("<li>หัวข้อ" + i + "-" + j + "</li>")

    }
    document.write("<br>");

}




