-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 18 May 2023, 12:57:20
-- Sunucu sürümü: 10.4.28-MariaDB
-- PHP Sürümü: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `ubybs23`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `bolgeler`
--

CREATE TABLE `bolgeler` (
  `bolge_id` int(11) UNSIGNED NOT NULL,
  `bolge_adi` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `il_adi` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ilce_adi` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `bolgeler`
--

INSERT INTO `bolgeler` (`bolge_id`, `bolge_adi`, `il_adi`, `ilce_adi`) VALUES
(2, 'İç Anadolu', 'Kayseri', 'İNCESU'),
(3, 'Akdeniz', 'Antalya', 'Belek');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `oteller`
--

CREATE TABLE `oteller` (
  `otel_id` int(11) NOT NULL,
  `otel_adi` varchar(120) NOT NULL,
  `bolge_id` int(11) NOT NULL,
  `yildiz_sayisi` int(7) DEFAULT NULL,
  `gunluk_ucret` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `oteller`
--

INSERT INTO `oteller` (`otel_id`, `otel_adi`, `bolge_id`, `yildiz_sayisi`, `gunluk_ucret`) VALUES
(2, 'Cornelia', 7, 6, 16000),
(3, 'Grand', 4, 4, 5000);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `rezervasyonlar`
--

CREATE TABLE `rezervasyonlar` (
  `rezervasyon_id` int(11) NOT NULL,
  `uye_id` int(11) NOT NULL,
  `otel_id` int(11) NOT NULL,
  `baslangic_tarihi` date DEFAULT NULL,
  `bitis_tarihi` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `rezervasyonlar`
--

INSERT INTO `rezervasyonlar` (`rezervasyon_id`, `uye_id`, `otel_id`, `baslangic_tarihi`, `bitis_tarihi`) VALUES
(3, 1, 1, '2023-05-17', '2023-05-19');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `uyeler1`
--

CREATE TABLE `uyeler1` (
  `uye_id` int(11) NOT NULL,
  `uye_adi` varchar(120) DEFAULT NULL,
  `eposta` varchar(120) DEFAULT NULL,
  `parola` varchar(170) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `saat` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `uyeler1`
--

INSERT INTO `uyeler1` (`uye_id`, `uye_adi`, `eposta`, `parola`, `tarih`, `saat`) VALUES
(1, 'Melisa', 'jsdfksjdlf', '1234dlşsdl', '2023-05-17', '09:23:35'),
(2, 'Melisa', 'jsdfksjdlf', '1234dlşsdl', '2023-05-17', '09:25:27'),
(3, 'Melisa', 'jsdfksjdlf', '1234dlşsdl', '2023-05-17', '09:26:04'),
(4, 'Melisa', 'jsdfksjdlf', '1234dlşsdl', '2023-05-17', '09:28:35'),
(5, 'Melisa', 'jsdfksjdlf', 'd7d3888912b9d37e67c5e16df7c16b1e43e366a0', '2023-05-17', '09:42:08'),
(6, 'denemeUye', 'deneme', 'd88ea461adab9a5d6d2d760f82bbd6b1ba81452e', '2023-05-18', '13:12:05');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `bolgeler`
--
ALTER TABLE `bolgeler`
  ADD PRIMARY KEY (`bolge_id`);

--
-- Tablo için indeksler `oteller`
--
ALTER TABLE `oteller`
  ADD PRIMARY KEY (`otel_id`),
  ADD KEY `otel_adi` (`otel_adi`);

--
-- Tablo için indeksler `rezervasyonlar`
--
ALTER TABLE `rezervasyonlar`
  ADD PRIMARY KEY (`rezervasyon_id`),
  ADD KEY `uye_id` (`uye_id`),
  ADD KEY `otel_id` (`otel_id`);

--
-- Tablo için indeksler `uyeler1`
--
ALTER TABLE `uyeler1`
  ADD PRIMARY KEY (`uye_id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `bolgeler`
--
ALTER TABLE `bolgeler`
  MODIFY `bolge_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `oteller`
--
ALTER TABLE `oteller`
  MODIFY `otel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `rezervasyonlar`
--
ALTER TABLE `rezervasyonlar`
  MODIFY `rezervasyon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Tablo için AUTO_INCREMENT değeri `uyeler1`
--
ALTER TABLE `uyeler1`
  MODIFY `uye_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
