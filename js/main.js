$(document).ready(function () {

    var stopAngle
    // الكود الذي سيشغل العجلة عند الضغط على الزر
    $(".spin-btn").click(function () {
        $(this).attr("disabled", "disabled")
        let option = Math.floor(Math.random() * 2)
        if (option == 0) {
            stopAngle = Math.floor(Math.random() * (180 - 120 + 1)) + 120;
        } else {
            stopAngle = Math.floor(Math.random() * (360 - 300 + 1)) + 300;
        }

        console.log(stopAngle)
        // تحديد عدد التدويرات العشوائية
        var spins = Math.floor(Math.random() * 5) + 3; // بين 3 و 7 لفات
        var degree = spins * 360 + stopAngle; // إضافة زاوية التوقف للمجموع الكلي

        // إضافة حركة التدوير للعجلة
        $(".wheel").animate(
            {
                // تدوير العجلة بشكل حلزوني
                deg: degree
            },
            {
                // المدة الزمنية
                duration: 5000, // 5 ثواني
                step: function (now) {
                    // تدوير العجلة باستخدام الـ CSS3
                    $(this).css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                },
                // بعد انتهاء التدوير يمكن إضافة أي تأثير آخر
                complete: function () {
                    // هنا يمكن إضافة منطق للتحقق من الجوائز أو عرض النتيجة
                    console.log("تم التدوير! الآن يمكنك مشاهدة الجائزة");
                }
            }
        );
    });
});
