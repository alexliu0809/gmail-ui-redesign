module.exports = `
        <style>
            body {
                margin: 0;
                padding: 0;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
            table {
                border-spacing: 0;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }
            span.MsoHyperlink {
                mso-style-priority: 99;
                color: inherit;
            }
            span.MsoHyperlinkFollowed {
                mso-style-priority: 99;
                color: inherit;
            }
            u+#body a {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
            }
            a {
                text-decoration: none !important;
            }
            a.underline {
                text-decoration: underline !important;
            }
            table {
                border-collapse: collapse;
            }
            img {
                -ms-interpolation-mode: bicubic;
            }
            .yshortcuts a {
                border-bottom: none !important;
            }
            @font-face {
                font-family: NotoIKEALatin;
                src: url('Longproof/Fonts/NotoIKEALatin-Regular.woff') format('woff');
                font-weight: normal;
                font-style: normal;
            }
            @font-face {
                font-family: NotoIKEALatin;
                src: url('Longproof/Fonts/NotoIKEALatin-Bold.woff') format('woff');
                font-weight: bold;
                font-style: normal;
            }
            @font-face {
                font-family: NotoIKEALatin;
                src: url('Longproof/Fonts/NotoIKEALatin-Italic.woff') format('woff');
                font-weight: normal;
                font-style: italic;
            }
            @font-face {
                font-family: NotoIKEALatin;
                src: url('Longproof/Fonts/NotoIKEALatin-BoldItalic.woff') format('woff');
                font-weight: bold;
                font-style: italic;
            }
            @media screen and (max-width: 639px) {
                .qr-code-image-td {
                    padding: 20px !important;
                    text-align: center;
                }
                .qr-code-image-mobile {
                    margin: auto !important;
                }
                .container {
                    width: 100% !important;
                    max-width: 100% !important;
                }
                .container50 {
                    width: 50% !important;
                    max-width: 50% !important;
                }
                .force-row {
                    display: block;
                    padding-right: 0 !important;
                    padding-left: 0 !important;
                    width: 100%;
                }
                .resize-img {
                    width: 100% !important;
                }
                .hide-mobile {
                    display: none;
                }
                .show-inline-mobile {
                    display: inline !important;
                }
                .show-mobile {
                    display: block !important;
                }
                .show-mobile-td {
                    display: table-cell !important;
                }
                .show-mobile-tr {
                    display: table-row !important;
                }
                .show-mobile-table {
                    display: table !important;
                }
                .reset-padding {
                    padding: 0 !important;
                }
                .mobile-padding {
                    padding-left: 20px !important;
                    padding-right: 20px !important;
                }
                .mobile-padding-top {
                    padding-top: 20px !important;
                }
                .mobile-padding-bottom {
                    padding-bottom: 20px !important;
                }
                .mobile-padding-10 {
                    padding-left: 10px !important;
                    padding-right: 10px !important;
                }
                .mobile-twoColumn {
                    padding-left: 10px !important;
                    padding-right: 10px !important;
                }
                .mobile-5050-left {
                    padding-left: 10px !important;
                    padding-right: 10px !important;
                }
                .mobile-5050-right {
                    padding-left: 10px !important;
                    padding-right: 10px !important;
                }
                .h1-header {
                    font-size: 30px !important;
                    line-height: 35px !important;
                }
                .h2-header {
                    font-size: 25px !important;
                    line-height: 30px !important;
                }
                .h2-header-qr {
                    font-size: 16px !important;
                    line-height: 19px !important;
                }
                .body-copy {
                    font-size: 14px !important;
                    line-height: 22px !important;
                }
                .disclaimer {
                    font-size: 12px !important;
                    line-height: 17px !important;
                }
                .footer-menu {
                    font-size: 12px !important;
                    line-height: 17px !important;
                }
                .product-name {
                    font-size: 15px !important;
                    line-height: 17px !important;
                }
                .price {
                    font-size: 30px !important;
                    line-height: 31px !important;
                }
                .smallprice {
                    font-size: 15px !important;
                    line-height: 19px !important;
                }
                .small-price {
                    font-size: 16px !important;
                }
                .main-cta {
                    font-size: 15px !important;
                    width: 260px;
                }
                .info-text {
                    font-size: 14px !important;
                    line-height: 18px !important;
                }
                .benefit-text {
                    font-size: 15px !important;
                    line-height: 20px !important;
                }
                .benefit-icon {
                    width: 40px !important;
                }
                .profile-text {
                    font-size: 12px !important;
                    line-height: 15px !important;
                }
                .qr-code-image-td {
                    width: 110px !important;
                }
                .qr-code-image-mobile {
                    width: 110px !important;
                    height: auto !important;
                }
                .stars {
                    width: 70px !important;
                }
                .w-25 {
                    width: 25px !important;
                }
                .pl-35 {
                    padding-left: 35px !important;
                }
                .pr-35 {
                    padding-right: 35px !important;
                }
                .pl-50 {
                    padding-left: 50px !important;
                }
                .mpl-0 {
                    padding-left: 0 !important;
                }
                .mpr-0 {
                    padding-right: 0 !important;
                }
                .pr-50 {
                    padding-right: 50px !important;
                }
                .pt-5 {
                    padding-top: 5px !important;
                }
                .pt-10 {
                    padding-top: 10px !important;
                }
                .pb-10 {
                    padding-bottom: 10px !important;
                }
                .pt-20 {
                    padding-top: 20px !important;
                }
                .pb-20 {
                    padding-bottom: 20px !important;
                }
                .pb-25 {
                    padding-bottom: 25px !important;
                }
                .pb-32 {
                    padding-bottom: 32px !important;
                }
                .f-15 {
                    font-size: 15px !important;
                    line-height: 19px !important;
                }
                .w230 {
                    width: 230px !important;
                }
                .w280 {
                    width: 280px !important;
                }
                .qr-code-pad {
                    padding: 20px 0 !important;
                }
            }
            @media screen and (max-width: 640px) {
                .mobile-padding {
                    padding-left: 10px !important;
                    padding-right: 10px !important;
                }
                table.table-mob-full td.table-mob-full-td,
                table.table-mob-full td.table-mob-full-td td.mobile-twoColumn {
                    display: block !important;
                    width: auto !important;
                }
                table.table-mob-full td.table-mob-full-td td.mobile-twoColumn td.mobile-padding-10 {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }
                .mobile-padding-20 {
                    padding-left: 20px !important;
                    padding-right: 20px !important;
                }
                .mobile-twoColumn {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }
                .button-td-padding {
                    padding-top: 20px !important;
                    padding-bottom: 0px !important;
                }
                .mobile-button {
                    display: block !important;
                    min-width: 220px;
                    margin: 20px auto !important;
                    text-align: center;
                    float: none !important;
                    width: 260px !important;
                }
                .h2-header-qr {
                    font-size: 18px !important;
                    line-height: 24px !important;
                    margin-bottom: 20px !important;
                }
            }
            @media screen and (max-width: 480px) {
                u+#body #wrapper {
                    min-width: 100vw;
                }
                .container50 {
                    width: calc(50% - 1px) !important;
                    max-width: calc(50% - 1px) !important;
                }
                .mobile-padding {
                    padding-left: 10px !important;
                    padding-right: 10px !important;
                }
                .main-cta {
                    width: auto !important;
                }
                .mobile-button {
                    width: auto !important;
                    min-width: 140px !important;
                    max-width: 100%;
                    display: table !important;
                }
                img.ikea_logo_resize {
                    max-width: 100px;
                }
                a.mobile-5050 {
                    padding: 15px 30px !important;
                    font-size: 14px !important;
                    line-height: 16px !important;
                }
                h1.heading_txt {
                    font-size: 16px !important;
                    line-height: 24px !important;
                }
            }
            @media screen and (max-width: 340px) {
                .social-icon {
                    height: auto !important;
                    width: 35px !important;
                }
                .stars {
                    width: 50px !important;
                }
                .label-image {
                    max-width: 100px;
                }
                .benefit-text {
                    font-size: 13px !important;
                    line-height: 18px !important;
                }
                .priceBox h2 {
                    font-size: 15px !important;
                    line-height: 19px !important;
                }
                .priceBoxSide,
                .priceBoxSide td {
                    height: 18px !important;
                }
            }
        </style>
        <style>
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
            .ExternalClass img[class^=Emoji] {
                width: 10px !important;
                height: 10px !important;
                display: inline !important;
            }
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
        </style>
        <style>
            @font-face {
                font-family: 'Noto IKEA';
                font-style: normal;
                font-weight: 400;
                src: url('data:font/woff2;base64,d09GMgABAAAAAAT4AA0AAAAAC8QAAASmAAIAQgAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIByCJAZgADQKgxSCLgE2AiQDJAsUAAQgBYxQB2AbaQoR1aQ3UPxIjI2VPf7EtkyDi2QJctWtD+Tg+b6ur3NvvswSG1J9UA17BXsLjVExO3jVq7EzAFZ1SrsuazfSBYBnlrqpS64Sd3C1pjaA7v+FCu34FzLCxqnPbXgDBd45XbipAqLxqFtJ4wHQtrbxMaJGVSnbZzmnVaOMEGqc1D6flQsBggCAIgheBAH89KQ3UlndOB4vBsB1AQCS2sE9DOlHu8/bsnY5vRetXbCM0cvnrF9JivFAOdrUUNmX1o728r60kgJG4ylrba2lsKJsfF8K6wCtqazWavtbGvXmsol6e0sTzlw0dxVCTr3GzJmzfD3d56XWzaP/OmDk0HXrxmYyFGgSJLvLwuCnL8WMR0ApO+hLs3HSmH0g+4kS9mejKA4TLAzCShgyFA/O+joHMFomx7BBD+hkoKH3LyIzSUk5aMBWYxtVAwgAAEBNS0uNlFJHvRn1/+eYUTII5CqAdtU09MUAClhAEgsBkhj6AgaDAPWuC9S5rvscAgCAD4A44AcWAzsAAAOAInXAmGDMfF0kGAnYITM3ZAdDQZlkT5QQ482E8Qee6iynHwcOPv9Q7IDZ9kEg2+uEA28Nlttvjtmeyjz7aX9drIB+DpdJ1kQJMF4nMP4AXnP69hc5T5mZvphelMqan8VwzeyIF3QkMnu2xLfEsV7smv1h4y/tZLfX7496a+rLixbMYU56apq9/gFN+Y1LGnqPG4mpwc/XF04uZKO351O5dTuGjd6ReW7SsVkTJjAoVRp5ujSc+VlmYb2OiqTg8sgtlU/eCP9ojJo0qMwACKCUdzz54tqsSOFvXsv6Eng/3DUC8MmsFXfcB265/KVpcFAABLxXpZMpPgaugVBlfHg/ZkoHQyVG+6vSizlymZ58R73Mo4cMYBDfuM8jgI8YCoDQa/ECEOE5LMT4gJkAAMJYZoIS5ghYtHMJDKV8DzadZTQ4ZEsleKiUreBluLwEPobKl+CnXKMQoFjbIUihHoOQntH3KiNMpj2XCgWc/S2ZQIAGNeq0ARbMJkZgleoKwCiOgTOXHFSZ6NB+0KuwZ2FgtZmNgK0SSgFO4z+wAtZnNHmsbJ0KNYZSqSAdpIJ4EGtdLgzVqD4V6q3VbaxqMQjprpEd0fOwzrkI0isyQQ5QJ4lVHibEg4sA9v1Bu3mEmPxnuOAfvKHU0HmKepxmtyuqBENPMvC2yhQi0Z5bbq4QiGQDqlT51q0VjIo4ZNfBpIqRUpXfCFclFiRrmChjdpJ7JK+BRWnOUgJcrMjytWoJbX5WTBpTp5bzVBlZTRygRNfVFjjMvTCVX7iVsZemOiLYWj1YH3k9XWznO5dV2pkBlZmLjC7AShUBxqAI7KWTH6vr8nC7gubR+Tza82omcN3hDEwO++kKRwBz3xxZXV/AZkUUM0gkG5GFgr/MklNAjOmUcEwZVRRvPaJ1dwI+e4YcU2ny6QzEthHXSyrjEWdGSZ7yC1419DUeAqRsFyWhMvwRKKUXSf05X4mWu/TFXKH4dvJLwU771wKD4iqK4opSNlX7/+K2AADupQbV83wgKhYjKYsRWxzxOHV/UVPrrDs+Q83ahIHmo1mINPjCPgAA') format('woff2'), url('data:font/woff;base64,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') format('woff');
                unicode-range: U+0049-U+004A, U+0020;
            }
            @font-face {
                font-family: 'Noto IKEA';
                font-style: italic;
                font-weight: 400;
                src: url('data:font/woff2;base64,d09GMgABAAAAAAUcAA0AAAAAC+gAAATJAAIAQgAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIByCKgZgADQKgziCPwE2AiQDJAsUAAQgBYxIB2AbeAoRlaRHEPxIjMF59Ad0kk7ZEXJnsaLP3O2BHjz1733/qzs7GUAX5Fg5c0HXP+T6J/TMBMCqTmnXZe1GugDwLLiZS65id+D3v1+r/60oNhsSNp0fIiHS4ooO5hdr9hDXzulL9FB+QyxBpG/DSqA0nt9vJt9o5DVjjCHm4W6mECAYAFAEwR9BgECSSUUyswsr8ccAeB4AUFc0/5D5BIlDZ08ZR+rIKcPH0mLc4GkTaEMfIBctKsisRXVFeXotqukEtMO/d2lpLukZvStrkZ7lZtUiPS9DRb1zqaiksKW4d/WBykuKwgoqzTcrTNr1FjN48LhpJA5tM3UodabCwkZTp7ZqRyOobAc5PGRhCKQWPahEwDAcdEE2Tiyr6iGQ8JrL2SiK08sWBoESSgYUv7Ds6xzAaG1Zjg26UH3ejwX4E5MvA2gj6aBBthrbBKgBBAAAIKekJEeEPPJN8/+fY5pLfZBtABqv16AWBlDAAqKxEEyGWspoAfLDS8/zPO+Y0H8QAEAkEAgMB9YCgAFAkatpxgSHmXAThj4kyA4xQ0Ls4MC67sDqukG1KvtV1apc2MBdczBo0eO6A4P6PXgQNDu/auGlWHfPxVxz1sIuK+Ng/u26fYN8fYF13b75TFm+PGOP4/ZzB1zbdG1km/bD2hO9vDJqds+CyBV/r6iKvPPWwqjllJxss0kL37ePbpbR8faaMzVrr8UMG+fSeN1V3+UwigNrz/urLJDbNLnExJCaSXHRw8Z3xczp4s7fzz/d6kp+g+sJ9Qt2V2+o8e2KdPvkk7I8O7Lf3ncrXq3IwcN/Xk7OlsYLyun8g4ii6U1rZrbPMAACKOlD1tQfNTCs22/+lvUFuB9mfwKeDBx/x/O9dPlLrykOCoDAA61RX5VxOdh94iEX3zVAfQyQTO9bifCGSTSNZaH3iR+JEdd7Kwnee773PggQQDgKgAAAAOAPQBjHLMQEAAOAYqEVA1gJZilblLKRDT34mm1ipRE7tJMe7EemTGF/msghDqCRvOFA0tWfg+ih+RxMN53PIbpWL/yOUNrZfcgAn7O/JfNWoEGNOm2ABbOJEVilXgVgFMfAeSFC/kYUtB/0K+xZGVhtZiNg6yilAKfxH1gB65U6MXl1KtQYcsUgDjEIQtl1uWJoRfepUL8+3IamnTDJ3R6E6itA5aZDXI8JEsBpUYsLfExgI137C4LAjqUG9J9VhBiu3lBqOjBFO3Zz3hWdJBuOEIDryRo8pX2nSuVlsNJsQJUq36vuCsZGkFReQVLFtGtV4DRcZdmRqNjBZBbNfWq/vj2VeZ9W4OIj9OtrFboeiWIAU7GLPLUm1hTeyDJ2tQUO4jtTgZ1bJlVa6xUJXx8eKBQfk9oBN1edigE4B3OR0QVY6SLAmA6BKlk/Vtfl4XalzaPzebTHasZhfTgDk8N+2ikrKlJjzMN9Y1/AZlUbkmhHckksiV9mQgSEs0RJe0w/gZsPXBD9PQsEHI1Ir/Yo6AAQuzPR5I6JxJ6ppEqCqRAfK/zXIFSVro5O2vCHoyr9lPSfcy2US+zTPKCGu/pnAfECHpupVDQirliFqQbwh9sCeL96mxtcvC4ARMWiGWUxYosjfk7ef9XUOetbj6EWz4SQF0ADw7nGgJAAAAAA') format('woff2'), url('data:font/woff;base64,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') format('woff');
                unicode-range: U+0049-U+004A, U+0020;
            }
            @font-face {
                font-family: 'Noto IKEA';
                font-style: normal;
                font-weight: 700;
                src: url('data:font/woff2;base64,d09GMgABAAAAAAUkAA0AAAAAC8gAAATSAAIAQgAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIByCJAZgADQKgzCCPgE2AiQDJAsUAAQgBYw4B2AbYQoIPgxwh9HCLyMaijNCM2woDncimNO7fLnjv7qyKY6H+P36nZm9+8Ucmlk1l1DIeMVD9EZoNLFUqDwffhz5Ps9WAhQhx7vQQG0hL8Qt7X9tLphOndD/OqG59jBtPTVcLjmxHJdc5e3MYsPCuLGy4QYnWKGEmiW66ei18oBZ9Q4ocbHVMm3CyhrgX5dzw11uUjtbS/uADsjixJ+QL+Q7t/A8D1yYrC6iRIhvKkwlC4Mc30pyaESNqlK2T2tOz5x0hFAnnH0++wACtAFIBKGIIKCFqQlt6zem5qIXB6oAAVr0e6/g3nTkXKutAROXwsp64OsPHU1QHUPWat+xLdYS+/uyoy2xT4Us1LNmd2YiNtelci2xuQVy7EglspV9L9W5M5Xv3LuXJl0Xym0lQWOew8+caejAyDm1XUP83rt96p7w9H3XIaSCAK5iOGWWth1rg1RJoi+HIFNGvS0p08TsTKAoSQWGI0Spg25KQbh9nAQlq/IEdcgH9DBk2/pfJE5SIxHKVkXKBaeUAwIA2LQrI4FYIkrF7f8fZUHYQfEWyJl8wpROkKAG+nQgoE8nS0jBEbC1CluqugBAM6AH0gJuQh4BCiCRWaBwVe3yjFptWq1CjZe1C1U1VVJQyw815GbegfG9gVjabX14/CnqKrz352drw4zhu/ls38bWVCinFM6bCXw5X912/vx56slzCT+6BLYhP9/hbZrPXz8Vhr+Nv87YyE+Wb92r46tbmDcuv8qzlvnPfT+/xXT04xfPb/8i+Y0z8Z6bp1fHnmJrmn+90fPSuser9NIFY7uJaQMxT4+nF80biqaZaOid0flfuhvtMX/BOyMIkKJfXX7ZKY3Qf72xP/BjmJ0Af+88/3/FvyRIFBCgZykPo2zG1xEm6WbEOLcxhKlIQbL533QZD8bCVD4WMBklxsK8egGaaWsHcD1WE6DTkRpSlAAnIRAQnm6BUjQNTKpv4IL9g6AfpiB5hjcoiI0yUOQcO6DEMT5AWXT8BRXhGQyqQrMH1HKZfv4Z6nzryTK4QEvIYjBJQJWQtAQUcJzBxQDCp8FAissFDsko+p/GCEyojqGwGk7iAFGWkwIqHkgWH+B8rhZAgJI0zkUlYQkbPMkiVaQKVvhL5vMbKXStwZLztVVDKUKJpymRYGHzENycFqkwNCwCeGiRwnWQYjwKOeGsTBceqy4En2oJEIIBDfcrNwiUxVIxGlsdYx54RqkZgUcppuGJpmaJWP2BUmCdMjM22jBDGhzUa0GPwlCS4mAjnMKyyAtiMpNWkCKUpY6ZkmKe1iWBIxlJashaZKIf5bJoGJ9ItyviowoPBZKJsQwlKsCe88W+g8UVJv3cdMdDztcOAkS6dkphz6OIDFPPCTx02riUI4B0xYE0LAr93MFniGNFe04cw9qUQ4dSakTkOM7bcwhk7KnJIggJyd4mL2lDL4AyghUuFGOJhCEYbAqEKFJAbnRaPOWyLv3+B0cYJu9moOPaoKB2aSw6gYArzkhD5IGhiTHQe0WhDAnwztNjIFA5eVlTfZeBq3MU/avU1cJFoTgiInU1VynVnfpakKApPDQgCThEcuFUyaAo8IsV7QDVLDW5XzNEEgZX88GJIJIoyKT/p6nK5KWN17ZovK5wKNWekqaGUh0AAAA=') format('woff2'), url('data:font/woff;base64,d09GRgABAAAAAAd0AA0AAAAADCwAAgBCAAAAAAAAAAAAAAAAAAAAAAAAAABHREVGAAAGeAAAABsAAAAcABwAC0dQT1MAAAaUAAAAIAAAACBEdkx1R1NVQgAABrQAAAC+AAABJLtf5DhPUy8yAAABpAAAAFQAAABga7th8mNtYXAAAAIkAAAANAAAAEQAXwEtZ2x5ZgAAAnAAAAFHAAABpvCrxJNoZWFkAAABMAAAADYAAAA2DJ8i5WhoZWEAAAFoAAAAHwAAACQF3gFcaG10eAAAAfgAAAAsAAAALA9tAOtsb2NhAAACWAAAABgAAAAYAe4Cc21heHAAAAGIAAAAGgAAACAAFgATbmFtZQAAA7gAAAJvAAAGdqDUxtVwb3N0AAAGKAAAAE8AAABsFVrYogABAAAAAgBCYgE9KF8PPPUAAwPoAAAAANMOGA8AAAAA2MjHuf+2/y4B+QLKAAEABgACAAAAAAAAeNpjYGRgYNH9d5uBgSni/zYGWcafQBFUwA0AgucFPgB42mNgZGBg4GYQYmBiAAIwDwE4GBgAA4EAKgAAeNpjYGFKY9rDwMrAwNTFFMHAwOANoRnjGIwYPYCi3BxMLKwsTEwsQDlmBiTg7u/vzqjAoMCwgEX3320GBhZdRlWgvvkgOSYlplNASoGBBQDrFwpyAlgAXgEEAAABhQAgAUv/tgEEAAABSwBaAcgAHAEcAEYBkwAfAVsAHAEe/8B42mNgYGACYmYgFgGSjGCahcEASHMAIUhOgcGLYcH//2CWJ4j1/+H/Pf9TgGqhAADpFAuGAAAAFAAUACwASwBLAFcAdgCCAJ8AtgDTeNp1UAPMlVEYft7zm/eea9s2t6Zs2xqyG8LUnI3ZbMicl12z1Zj94Xw3a37xEAzzAfrIbqINXUCR+3nYz/3z6YR8lMryLXZTqhTZUhB8AC0Tf32A31+u8mjZb+7iVlomX5oxg4bNmDE9Rndj06fH5EIMIOWsksFL8c8BayASLVssxUKlUuZFburs1LlTen3Q5EjajtSXP+xq397eaaqV2Clp6dx1RYAwG2ih24CigMw+ohkRe5fyljb8j3VfpGG25F3OhMba19u1s6tPsNJTOfmNdTiAJ2z4d9bhe9hw6aLYe5V3NEHs9b+yfiPd5S8ZDAl7JLKnMKe3p2NdR2+6SVvlPZMWpzQ/AA0RyD6g+LMUs2v0aAqMGjXRTSu948d75YPuiVon15WJePYfnUF7dHDAw1s6pzva1rZ1pJvMIz0XOioMkFmwAHjaLMYXvEIBAMbR/937vilv6tuzrD04b7p1KXdIGphD7hjnmP9yaX6HDnDFGgvDDoAB6Aa/DHQTn7Fu0WKu2/yy0R3ujVvd5dP41j2aRkf3eTcWesCrsdJD6sZWjyib/3pM0cz0xJybSz0l79T1S56dkX7FpTOlwZBs30lZ6EYOBEG0/iQg1jGTIMzMES55fasznNbjwN/nqWSNwyRr3Fg95e7t1aXGGinVXwVN6jNMP+kb2jLREn+mBGtVhfp6jzaLJ0PuRVRlK0Em1DrjPSBzC3TggNW6FjWLtqGuArgCveSdcTtxzprm8GQgP+k95yPPn1ijqdDiI3oV5LuI/dPw/0WNr5zPT7LYh22uUaxw5G+o8JSOt2we5vLuTpX21pG70+UEjZEDZ3bR/7kHwwc7vWkG1NElU3LEyNR3po9mLngazMffcIDVVX7Dy4yI9Nz/u/jBDXxo8O897UDOb33gOffzXmnLH6uPnhNNsQLSlTkfHkDnt25vK1T4ag08iwPQ7qWWnB88O/qHdu5+JrHbGbKPXWD5O6lSIJkseqBSYvSqNpDbvrW4UXnjRoW3eO79XXAmX8RsYBm8cT3VaObX1Oz6Pa1Z8EyX9zRyzjaWeRyjHWgF1odIbKJ7PLPawl7VorHbeCY1j9zSghGr1h2D56TzT5HrRMhx7USjpjtjWxf6b/YVDxztHSnHmyG95c0GJa/pK/bQVVtsZUyfrKEzmaW7kqpGpvIsnDP2vlVxIt4yT9nzdzR4Q9t4inZmbBF36BJfbQ614BR3Mjw91Tv7UMGYyWIH9PfmliFLvKk+uPMbT/wj3fonuQKEYgcaAHjaY2BiAIP/cxiMGLABbiBmZmRiZGZkYdBh0GVkZWRjZGfkYPPUK07MKWHzAlPspXmZBgaOBiyZesXJLFlAgjMzvjgZLMeZBWMBAHSFEt4AeNpjYGRgYOBhgAAmMGQGirEycDEwAgAB8wAoAAABAAAACgAcAB4AAURGTFQACAAEAAAAAP//AAAAAAAAeNptjbNiQ2EUx3/XKNfaWOputW3MdWNzzRPlDW9OrqZ8OPwDBXBp0UY/Pb99ZfS7Wcow+V/6TbOa+azk2OQVOEa9uzmd5vHl+ViiTGEV6+jx8ZLdk6PXaXav/Pru6HJa4sOtxPujd4nPD3cSwfPQAQUVze9Uv9M/PzMV8d0sfzNb7tbL5fL6NssQIPwfVBo6LtPs8xrObfkmqo+wpNPi6bxMXIYlysb3tHtwDKmiqcoguo90cP29IVM6h2chHgAA') format('woff');
                unicode-range: U+0049-U+004A, U+0020;
            }
            @font-face {
                font-family: 'Noto IKEA';
                font-style: italic;
                font-weight: 700;
                src: url('data:font/woff2;base64,d09GMgABAAAAAAUcAA0AAAAADBQAAATLAAIAQgAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIByCKgZgADQKgzyCTQE2AiQDJAsUAAQgBYxuB2AbrAoR1aRJEPw8sG0dm+EysjfocCWjQKRt10wsdNXmmz0ePg71/Z+fOc5z4cQCMtvtpWUVr1WkV+RtFnvyD5u3HwHBMjkI7VUW9pzNpNN06aw2iehI+UPeIHBUAmD7vc427XZNW9Az55+QCI8z/6U7rB2WWw+23tNz6CI5hOKqGFMhEX4agUUonpY7F3UtrAQJoYubj78fQIABgESIIkKgxxTmoGN8ai4UicCZAwjQM2U7kfYBjGuGulth3tBd1wL31qrednijGHAFdp8Sa4n8nOxoS+QjELCF4i4zMxHRMVG5loiOK4izRHRSBNOiEjEtI7UvPSr/jNkZaWygueYsRgN5i/hS1doL4xrvnhpY98Bix54eT184AsRBiPNDApEyS4QjFwQZq4ytUSJno2CryjQpV5MwjMwlgYiUUUeTjMLriUAGlfFsLyTId1bIP9q8fmAkUzm8KRHIviITJVGJiYAAAC4zMhLICklIFt3+31EbsgPiAyBX7DSWEEGCBlhAQK8osoRyBG7cK73mnO9W+g+6gBmgB14BnwAKkOihqkRVTfGZGqpaKpKaWK0mqSoXFJTkF6jl5hbmhRtnbLenzdtUZl6xqVApvXpVJfTlzTgd85+qLFEpHEnO33xsG7yw5q9i+YuDF551tfz0ytMN3n61fjDTyit2qDqX5PCaDz1AKaS8BVGXLJbqjgp1hp6nL8xZv3jhdqPh4SYYLT21+P4avHW9Pq0cnT5o91VVza3Fje99QyNaE7GLVu+BeoXkQAwValg4GJ1Jb1ucPWnQUVcKS83cNLPU0mgLzTzHri3TYpM3+zQLflv1jumy8Im+3gfqMV484KaRHFBU7ABAgBStmbAuu0Ij9JuiILyELw3pOfxXtD3mNdydfuVpDTIGCGhvn3wg+U557FM/uMt3CV8S5TTBn1AKr6FIGNGj86/whBat5i+plD8kDx5AoEsLDBAAgA5gbDcBlRLgEcCIeKKcGH3MIUExNpEoEf9Jok/xJAulUlIQS8tIkTPdJSWOTCZl0cydVISzTlIVyraQWi5hr3+GOl9pEsDE2L/TUhFoqKlrAwtjZIpglfMKMEpTcN6IRz8KenQfjCr2hgxYbWYjsGWkc2Dy9A9WYD02aRSeJpZqXldRMxTNQg6y4EFD1uWmYX6ur6L+eLQNmweBYN7ReW03bHxLYTXkDBq0B+yvI8cizJhLgBF+yU7Pyg3+LcEKiLRycMnQKeYVkJddkWVRdlrBu0rryNSPQjReoeih2g5UA9/RCpmHhwKvzqrkIFUVzmKqIrsyE6uFTE8h0oNXVVOZ8xyBSx2VvnVtwaqnvZjC3OerIc9NXFaqUGThagsO6rtzhd1bISitN1T48ejAoESvSG7qHcgmGAXsbBaNLmDlisAYtwCl8o/VdXm4XXFzdD6P9rqaSZQ/nMHksJ8yZYWlKTC3vIUvsFlRrcYg6iqJQ6t/1qn3VsE5ndlK81LBOZ8/Yn0vAmG8Ec91XAuGgrQ6KsMESHsSsJC1eGd4srHbPAyYVEqMgpPmI9GSTyX3N8EKBp+dmockd9eeFuq5w32WMKzwmlZyVVl14Be3BfhXvqrh7nVKUJKAtXIUSSSTgpz0LzYdrfVztHQfrxjiXV3Bse5ujAAA') format('woff2'), url('data:font/woff;base64,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') format('woff');
                unicode-range: U+0049-U+004A, U+0020;
            }
            [style*="Noto"] {
                font-family: 'Noto IKEA', 'Noto Sans', sans-serif !important;
            }
        </style>
        <!--[if gte mso 9]>
<style type="text/css">
body, td, span, a, p, h2 {
font-family: Arial !important;
mso-line-height-rule:exactly;
}
.main-cta{
padding: 16px 30px;
}
.main-cta a{
padding: 0 !important;
}
.mso-dir-ltr {
direction: ltr !important;
}
.mso-dir-rtl {
direction: rtl !important;
}
.hide-ie {
display: none !important;
} 
.show-ie {
display: table !important;
} 
</style>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    </head>
    <body style="margin:0; padding:0;background: #ffffff;"   id="body">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="0"  style="display: none; font-size: 0; line-height: 0;">
            <tr style="font-size: 0px; line-height: 0px;">
                <td align="center" style="display: none; font-size: 0px; line-height: 0px;" >
                    <!-- Pre-Header Starts Here -->
                    <div data-content-region-name="Pre-Header-Text">
Thanks for shopping at IKEA! Please let us know how your experience was.</div>
                    <!-- Pre-Header Ends Here -->
                </td> 
            </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" id="wrapper">
            <tr>
                <td align="center" id="content">
            <div style="display: block;" data-content-region-name="Header">
<!-- START BLOCK:  Header -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tbody>
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
          <tbody>
            <tr>
              <td class="mobile-padding">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td align="right" style="padding-top:10px;"><a class="underline" href="https://info.email.ikea.com/pub/" style="font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif; color:#999999;font-size:10px;line-height:24px;text-decoration: underline;" target="_blank">Open in your browser</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
          <tbody>
            <tr>
              <td align="left" class="mobile-padding" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td class="pt-10 pb-20" style="padding-top:10px;padding-bottom:27px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                            <tr>
                              <td style="padding-bottom:3px;" valign="top"><a class="profile-text" href="https://info.email.ikea.com/pub/" style="font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif;  " target="_blank"><img alt="IKEA" border="0" class="ikea_logo_resize" src="http://static.cdn.responsys.net/i8/responsysimages/content/ikeaitab003/201905_global_logo.jpg" style="width: 100px; display: block;" width="100" /></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<!-- END BLOCK: Header --></div>
                    <div style="display: block;" data-content-region-name="All_Modules_Body_Skeleton_Start">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
  <tbody>
    <tr>
      <td align="center" style="" valign="top">
        <table bgcolor="#F2F5F7" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
          <tbody>
              <tr>
                <td align="left" class="reset-padding pb-20" style="font-size: 0; line-height: 0; padding:0 0 37px 0; " valign="top">
                </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>
                    <div style="display: block;" data-content-region-name="Heading_Text">
<!-- START BLOCK:  Heading_Text -->
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
   <tbody>
      <tr>
         <td align="center" style="" valign="top">
         <table bgcolor="#F2F5F7" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
            <tbody>
               <tr>
                  <td align="left" class="mobile-padding" style="padding:0 32px" valign="top">
                  <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                        <tr>
                           <td align="left" class="mobile-padding" style="padding:25px 32px 0px 32px;" valign="top">
                           <h2 style="font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif; font-weight:bolder; font-size:30px; line-height:40px; color:#111111; margin:0 0 0 0; padding:15px 0 0 0;">How did we do?
                           </h2>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  </td>
               </tr>
            </tbody>
         </table>
         </td>
      </tr>
   </tbody>
</table>
<!-- END BLOCK: Heading_Text --></div>
                    <div style="display: block;"><!-- START BLOCK:  Banner_Image -->
                        <!-- END BLOCK: Banner_Image --></div>
                    <div style="display: block;" data-content-region-name="Body_content_1">
<!-- START BLOCK:  Body_content_1 -->
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
   <tbody>
      <tr>
         <td align="center" valign="top">
            <table bgcolor="#F2F5F7" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
               <tbody>
                  <tr>
                     <td align="left" class="mobile-padding" style="padding:0 32px;" valign="top">
                        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
                           <tbody>
                              <tr>
                                 <td align="left" class="mobile-padding-20" style="padding:32px 32px 0px 32px;" valign="top">
                                    <p class="body-copy; reset-padding" style="font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif; font-weight:normal; font-size:14px; line-height:18px; color:#111111; margin:0 0 20px 0; padding:0 71px 0 0;"><strong>Hej Participant,</strong>
                                    </p>
                                    <p class="body-copy" style="font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif; font-weight:normal; font-size:14px; line-height:18px; color:#111111; margin:0 0 20px 0; padding:0;">Thanks for shopping at IKEA! Please let us know how your experience was.
<br /> <br />

It’s our mission to improve the everyday life for the many people. Sharing your opinions helps us and other IKEA shoppers. Play a part in creating a better experience and tell us how we can do better.</p>
                                 </td>
                              </tr>
                              <tr>
                                 <td align="left" class="table-mob-full-td mobile-padding-20 " style="padding:0px 32px 32px 32px;" valign="top" width="100%">
                                    <table border="0" cellpadding="0" cellspacing="0" class="mobile-button align-left">
                                       <tbody>
                                          <tr>
                                             <td class="main-cta align-left" style="font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif;   border-radius:24px; -webkit-border-radius: 24px; -moz-border-radius: 24px; background-color:#0058A3; color:#ffffff; font-size:14px; line-height: 16px; display:inline-block; text-align: center;" valign="top"><a class="mobile-5050" href="https://info.email.ikea.com/pub/cc" rilt_="Survey_Link_EN_US" style="color:#ffffff; text-decoration:none; display:block; padding: 14px 30px 15px;min-width: 220px;" target="_blank">Give us feedback</a>
                                             </td>
                                          </tr>
                                           
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
                   <tr>
                      <td align="left" valign="top">
                        <hr style="height:1px; border:none; color:#F2F5F7; background-color:#F2F5F7;margin-top: 0px;margin-bottom: 0px;" />
                      </td>
                    </tr>
               </tbody>
            </table>
         </td>
      </tr>
   </tbody>
</table>
<!-- END BLOCK:  Body_content_1 -->
</div>
                    
                    <div style="display: block;" data-content-region-name="Body_Splitter">
<!-- START BLOCK:  Body_Splitter -->
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"  class="container" style="width:640px;" width="640">
  <tbody>
    <tr>
      <td align="center" valign="top">
        <table bgcolor="#F2F5F7" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
          <tbody>
            <tr>
              <td align="left" class="mobile-padding" style="padding:0 32px;" valign="top">
                <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" valign="top">
                        <hr style="height:1px; border:none; color:#F2F5F7; background-color:#F2F5F7;" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<!-- END BLOCK:  Body_Splitter --></div>
                    <div style="display: block;" data-content-region-name="Body_content_2">
<!-- START BLOCK:  Body_content_2 -->
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
   <tbody>
      <tr>
         <td align="center" valign="top">
         <table bgcolor="#F2F5F7" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
            <tbody>
               <tr>
                  <td align="left" class="mobile-padding" style="padding:0 32px;" valign="top">
                  <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
                     <tbody>
                        <tr>
                           <td align="left" class="mobile-padding-20" style="padding:32px 32px 0px 32px;" valign="top">
                           <p class="body-copy" style="font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif; font-weight:normal; font-size:14px; line-height:18px; color:#111111; margin:0 0 20px 0; padding:0;"><strong>Tired of these emails?</strong>
                           </p>

                           <p class="body-copy" style="font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif; font-weight:normal; font-size:14px; line-height:18px; color:#111111; margin:0 0 20px 0; padding:0 74px 0 0;"><span><a class="underline" href="https://info.email.ikea.com/pub/" rilt_="Unsubscribe_Link_EN_US" style="text-decoration: underline !important; font-family: 'Noto IKEA','Noto Sans',Verdana,'Helvetica Neue',Arial,sans-serif; font-weight:normal; font-size:14px; line-height:18px; color:#111111;" target="_blank">Unsubscribe here.</a></span> We won't take it personally.
                           </p>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  </td>
               </tr>
            </tbody>
         </table>
         </td>
      </tr>
   </tbody>
</table>
<!-- END BLOCK:  Body_content_2 --></div>   
                    <div style="" data-content-region-name="All_Modules_Body_Skeleton_End">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
  <tbody>
    <tr>
      <td align="center" style="" valign="top">
        <table bgcolor="#F2F5F7" border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
          <tbody>
            <tr>
              <td align="left" class="reset-padding pb-20" style="font-size: 0; line-height: 0; padding:0 0 37px 0; " valign="top">
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>
                    <div style="display: block;" data-content-region-name="Footer_Block">
<!-- START BLOCK:  Footer --><!-- START BLOCK:  Footer -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tbody>
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" class="container" style="width:640px;" width="640">
          <tbody>
            <tr>
              <td align="left" style="padding-left:32px;padding-right:32px;" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td class="pt-20 pb-20" style="padding-top:34px;padding-bottom:34px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                                               <tr>
                              <td align="center" class="footer-menu" style="font-family: 'Noto IKEA','Noto Sans','Helvetica Neue',Arial,sans-serif; color:#484848;font-size:10px;line-height:15px;padding-top: 10px; padding-bottom: 10px;">
                                  Please note that this e-mail is being sent from an e-mail address that can't receive e-mail. Please do not reply to this email. If you have any questions, please contact our <a class="underline" href="https://info.email.ikea.com/pub/0" style="color:#484848; font-size:10px;line-height:15px;" target="_blank">Customer Support Centre.</a> 
                                      </td>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                              <td align="center" class="disclaimer" style="font-family: 'Noto IKEA','Noto Sans','Helvetica Neue',Arial,sans-serif; color:#9d9d9d; font-size:10px;line-height:20px;padding-top: 0px; padding-bottom: 0px;">This email is sent from IKEA © Inter IKEA Systems B.V. 2022.</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<!-- END BLOCK: Footer --><!-- END BLOCK: Footer -->
</div>
                </td>
            </tr>
        </table>
    </body>
`
