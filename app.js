var app = angular.module('myapp', ['ngAnimate']);
app.controller('mycont', function ($scope) {


    $scope.veriler = [
        { 'ad': 'Baki', 'soyad': 'Ozturk', 'email': 'ccc@gmail.com' },
        { 'ad': 'Elf', 'soyad': 'Turnsia', 'email': 'ggg@gmail.com' },
        { 'ad': 'Yuri', 'soyad': 'Ivankovic', 'email': 'ghsa@ru.com' },
        { 'ad': 'George', 'soyad': 'Fellix', 'email': 'george@gmail.com' }
    ]

    $scope.UyeEkle = function () {

        $scope.veriler.push({ 'ad': $scope.adi, 'soyad': $scope.soyadi, 'email': $scope.emaili });
        $scope.adi = '';
        $scope.soyadi = '';
        $scope.emaili = '';
    }

    $scope.Sil = function (index) {
        $scope.veriler.splice(index, 1);
        $scope.adi = '';
        $scope.soyadi = '';
        $scope.emaili = '';
    };
    var guncellenecekSayi;
    $scope.Guncelle = function (index) {

        if (index == null) {
            if (guncellenecekSayi != null) {
                var guncellenecekUye = $scope.veriler[guncellenecekSayi];
                guncellenecekUye.ad = $scope.adi;
                guncellenecekUye.soyad = $scope.soyadi;
                guncellenecekUye.email = $scope.emaili;
             
            } else {
                alert('Lütfen önce güncelleyeceğiniz üyenin yanındaki güncelle butonuna basınız');
            }

        } else {

            var deger = $scope.veriler[index];
            $scope.adi = deger.ad;
            $scope.soyadi = deger.soyad;
            $scope.emaili = deger.email;
            guncellenecekSayi = index;



        }
   

    }
});

// $scope.Guncelle=function(index){
//     $scope.veriler.splice(index,1,{'ad':$scope.ad,'soyad':$scope.soyad});

// }); Bunu da diyebilirdik. Bu indexli itemi sil , yerine 3.parametredeki itemi ekle demek..
