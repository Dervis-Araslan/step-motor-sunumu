const projectSteps = [
    {
        id: 1,
        title: "Proje Amacı",
        icon: "bullseye",
        color: "#e74c3c",
        content: {
            title: "Proje Amacı",
            sections: [
                {
                    text: "Bu projede amaçlarımız:",
                    items: [
                        "Step motor kullanarak tabela benzeri bir yapının yön değiştirmesini sağlamak",
                        "Arduino üzerinden motor kontrolünü öğrenmek",
                        "Elektronik devre ve yazılım bilgilerini pekiştirmek",
                        "Otomasyon ve control sistemlerinin temellerini anlamak"
                    ]
                },
                {
                    subtitle: "Projenin Kapsamı",
                    text: "Bu proje, step motor kontrolünü Arduino platformu üzerinden gerçekleştirerek, dönme hareketi ile çalışan sistemleri anlamamıza yardımcı olmaktadır. Gerçek hayattaki uygulamalara benzer bir model oluşturulmuştur."
                }
            ]
        }
    },
    {
        id: 2,
        title: "Kullanılan Malzemeler",
        icon: "microchip",
        color: "#f39c12",
        content: {
            title: "Kullanılan Malzemeler",
            sections: [
                {
                    text: "Projede aşağıdaki malzemeler kullanılmıştır:",
                    items: [
                        "Arduino Uno (Mikrodenetleyici Kart)",
                        "28BYJ-48 Step Motor",
                        "ULN2003 Motor Sürücü Kartı",
                        "Jumper Kablolar",
                        "Breadboard",
                        "9V Pil veya USB Bağlantısı (Güç Kaynağı)",
                        "(İsteğe bağlı) Buton",
                        "(İsteğe bağlı) LCD Ekran",
                        "(İsteğe bağlı) 10K Direnç"
                    ]
                },
                {
                    subtitle: "Malzeme Özellikleri",
                    columns: [
                        {
                            title: "28BYJ-48 Step Motor",
                            items: [
                                "5V DC çalışma voltajı",
                                "4 fazlı unipolar step motor",
                                "Redüktörlü (dişli sistemli)",
                                "Adım açısı: 5.625° (64 adım/devir)",
                                "1/64 redüksiyon oranı"
                            ]
                        },
                        {
                            title: "ULN2003 Sürücü Kartı",
                            items: [
                                "4 fazlı step motor sürücüsü",
                                "Çalışma voltajı: 5-12V DC",
                                "LED göstergeler",
                                "Kolay bağlantı pinleri",
                                "Dahili darlington transistör dizisi"
                            ]
                        }
                    ]
                }
            ],
            images: [
                {
                    alt: "Arduino Uno",
                    src: "/placeholder-arduino.png",
                    caption: "Arduino Uno"
                },
                {
                    alt: "28BYJ-48 Step Motor",
                    src: "/placeholder-motor.png",
                    caption: "28BYJ-48 Step Motor"
                },
                {
                    alt: "ULN2003 Motor Sürücü",
                    src: "/placeholder-driver.png",
                    caption: "ULN2003 Sürücü Kartı"
                }
            ]
        }
    },
    {
        id: 3,
        title: "Devre Şeması",
        icon: "project-diagram",
        color: "#2ecc71",
        content: {
            title: "Devre Şeması",
            sections: [
                {
                    text: "Proje devresinin bağlantıları aşağıdaki şekilde yapılmıştır:",
                    items: [
                        "ULN2003 sürücü kartındaki IN1, IN2, IN3, IN4 pinleri sırasıyla Arduino'nun 8, 9, 10, 11 dijital pinlerine bağlanmıştır",
                        "ULN2003 kartının VCC pini Arduino'nun 5V pinine bağlanmıştır",
                        "ULN2003 kartının GND pini Arduino'nun GND pinine bağlanmıştır",
                        "Step motor, ULN2003 kartındaki motor konnektörüne takılmıştır",
                        "(Opsiyonel) Buton Arduino'nun 2. pinine bağlanmıştır"
                    ]
                },
                {
                    subtitle: "Tinkercad Modeli",
                    text: "Projenin Tinkercad üzerinde hazırlanmış simülasyonu. Gerçek hayatta uygulanmadan önce sanal ortamda test edilmiştir.",
                    link: "https://www.tinkercad.com/things/8PZEXWzNdQR-step-motorla-donen-tabela?sharecode=WvMU1UwxmlYWkFf8Wj-077Pz7xvjBqTuRBJfG2iuT6E"
                }
            ],
            images: [
                {
                    alt: "Devre Şeması",
                    src: "/placeholder-circuit.png",
                    caption: "Devre Şeması (Tinkercad Ekran Görüntüsü)"
                }
            ]
        }
    },
    {
        id: 4,
        title: "Kod Açıklaması",
        icon: "code",
        color: "#3498db",
        content: {
            title: "Kod Açıklaması",
            sections: [
                {
                    text: "Projede kullanılan Arduino kodu aşağıdaki ana bileşenleri içermektedir:",
                    items: [
                        "Stepper kütüphanesi ile motor kontrol edildi",
                        "Belirli adım sayısı kadar saat yönü ve tersi yönde döndürülüyor",
                        "Delay ile dönüşler arasında bekleme sağlanıyor",
                        "(Eğer buton eklediysek: Butona basılınca döner)"
                    ]
                },
                {
                    subtitle: "Arduino Kodu",
                    code: `#include <Stepper.h>
  
  // Step motor için sabit değerler
  const int STEPS_PER_REV = 2048;  // Redüksiyon oranı ile birlikte tam tur adım sayısı
  
  // Step motor pinleri (IN1, IN2, IN3, IN4)
  Stepper motor(STEPS_PER_REV, 8, 10, 9, 11);
  
  // Buton pini (opsiyonel)
  const int buttonPin = 2;
  
  void setup() {
    // Motor hızını ayarla (RPM)
    motor.setSpeed(10);
    
    // Buton pini ayarı (opsiyonel)
    pinMode(buttonPin, INPUT_PULLUP);
    
    Serial.begin(9600);
    Serial.println("Step Motor Tabela Projesi Başlatıldı");
  }
  
  void loop() {
    // Buton kontrolü (opsiyonel)
    // if (digitalRead(buttonPin) == LOW) {
    
    // Saat yönünde dönüş (90 derece - çeyrek tur)
    Serial.println("Saat yönünde dönüş");
    motor.step(STEPS_PER_REV / 4);
    delay(1000);  // 1 saniye bekle
    
    // Saat yönünün tersine dönüş (90 derece - çeyrek tur)
    Serial.println("Saat yönünün tersine dönüş");
    motor.step(-STEPS_PER_REV / 4);
    delay(1000);  // 1 saniye bekle
    
    // Buton kontrolü kapama (opsiyonel)
    // }
  }`
                },
                {
                    subtitle: "Kodun Çalışma Mantığı",
                    text: "Bu kod, step motoru kontrol ederek tabela benzeri bir yapının dönmesini sağlar:",
                    items: [
                        "Stepper kütüphanesi import edilir",
                        "Motor ve pin tanımlamaları yapılır",
                        "Setup fonksiyonunda motor hızı ayarlanır",
                        "Loop fonksiyonunda motor saat yönünde ve tersinde döndürülür",
                        "Her dönüş arasında delay ile bekleme süresi eklenir"
                    ]
                }
            ]
        }
    },
    {
        id: 5,
        title: "Uygulama Alanları",
        icon: "cogs",
        color: "#9b59b6",
        content: {
            title: "Uygulama Alanları",
            sections: [
                {
                    text: "Bu projenin temel aldığı step motor kontrolü, günlük hayatta birçok uygulamada karşımıza çıkmaktadır:",
                    columns: [
                        {
                            title: "Ticari Uygulamalar",
                            items: [
                                "Döner reklam tabelaları",
                                "Mağaza vitrin göstericileri",
                                "Menü gösterim sistemleri",
                                "Sergi ve fuar stantları"
                            ]
                        },
                        {
                            title: "Endüstriyel Uygulamalar",
                            items: [
                                "Robotik kol uygulamaları",
                                "CNC makineleri",
                                "3D yazıcılar",
                                "Konveyör sistemleri",
                                "Otomatik kapı mekanizmaları"
                            ]
                        }
                    ]
                },
                {
                    subtitle: "Proje Geliştirme Potansiyeli",
                    text: "Bu proje aşağıdaki eklemelerle geliştirilebilir:",
                    items: [
                        "Hareket sensörü ile otomatik dönme",
                        "Uzaktan kumanda ile kontrol",
                        "Bluetooth veya Wi-Fi bağlantısı",
                        "Programlanabilir dönüş zamanlamaları",
                        "Mobil uygulama ile kontrol"
                    ]
                }
            ],
            images: [
                {
                    alt: "Döner Tabela Örneği",
                    src: "/placeholder-billboard.png",
                    caption: "Döner Reklam Tabelası"
                },
                {
                    alt: "Robotik Kol",
                    src: "/placeholder-robotarm.png",
                    caption: "Robotik Kol Uygulaması"
                }
            ]
        }
    },
    {
        id: 6,
        title: "Öğrendiklerimizz",
        icon: "graduation-cap",
        color: "#1ABC9C",
        content: {
            title: "Öğrendiklerimiz",
            sections: [
                {
                    text: "Bu projeyi gerçekleştirirken aşağıdaki konularda bilgi ve deneyim kazandık:",
                    items: [
                        "Arduino ile motor kontrolü",
                        "Step motorun çalışma mantığı ve kullanımı",
                        "Tinkercad'de devre simülasyonu yapma",
                        "Kod yazarken mantık kurma ve test etme",
                        "Elektronik devre elemanlarının bağlantıları",
                        "Motor sürücü devrelerinin çalışma prensibi"
                    ]
                },
                {
                    subtitle: "Teknik Kazanımlar",
                    columns: [
                        {
                            title: "Elektronik",
                            items: [
                                "Motor türleri ve farkları",
                                "Sürücü devrelerinin önemi",
                                "Güç yönetimi",
                                "Sinyal kontrolü"
                            ]
                        },
                        {
                            title: "Programlama",
                            items: [
                                "Kütüphane kullanımı",
                                "Döngüler ve koşullar",
                                "Zamanlamaların önemi",
                                "Kodun optimizasyonu"
                            ]
                        }
                    ]
                },
                {
                    subtitle: "Projenin Katkıları",
                    text: "Bu proje bizlere sadece teknik bilgi değil, aynı zamanda şu becerileri de kazandırdı:",
                    items: [
                        "Sistematik problem çözme yeteneği",
                        "Proje planlama ve uygulama",
                        "Dokümantasyon hazırlama",
                        "Teknik sunum yapabilme"
                    ]
                }
            ]
        }
    }
];

export default projectSteps;