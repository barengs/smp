<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr" data-nav-layout="vertical" class="light" data-header-styles="light" data-menu-styles="dark" data-width="fullwidth" data-toggled="close">

<head>

    <!-- Meta Data -->
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>E-BMP</title>
    <meta name="Description" content="Tailwind Responsive Admin Web Dashboard HTML5 Template">
    <meta name="Author" content="Spruko Technologies Private Limited">
	<meta name="keywords" content="tailwind template,tailwind dashboard,tailwind,tailwind admin template,dashboard,tailwind css templates,html dashboard template,tailwind dashboard template,dashboard tailwind,admin,html css templates,html dashboard,html css javascript templates,dashboard tailwind template,tailwind css dashboard">
    
    <!-- Favicon -->
    <link rel="icon" href="{{ asset('assets/images/brand-logos/favicon.ico')}}" type="image/x-icon">
    
    <!-- Choices JS -->
    <script src="{{ asset('assets/libs/choices.js/public/assets/scripts/choices.min.js')}}"></script>

    <!-- Main Theme Js -->
    <script src="{{ asset('assets/js/main.js')}}"></script>

    <!-- Style Css -->
    <link href="{{ asset('assets/css/styles.css')}}" rel="stylesheet" >

    <!-- Node Waves Css -->
    <link href="{{ asset('assets/libs/node-waves/waves.min.css')}}" rel="stylesheet" > 

    <!-- Simplebar Css -->
    <link href="{{ asset('assets/libs/simplebar/simplebar.min.css')}}" rel="stylesheet" >
    
    <!-- Color Picker Css -->
    <link rel="stylesheet" href="{{ asset('assets/libs/flatpickr/flatpickr.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/libs/@simonwep/pickr/themes/nano.min.css')}}">

    <!-- Choices Css -->
    <link rel="stylesheet" href="{{ asset('assets/libs/choices.js/public/assets/styles/choices.min.css')}}">

    <!-- FlatPickr CSS -->
    <link rel="stylesheet" href="{{ asset('assets/libs/flatpickr/flatpickr.min.css')}}">

    <!-- Auto Complete CSS -->
    <link rel="stylesheet" href="{{ asset('assets/libs/@tarekraafat/autocomplete.js/css/autoComplete.css')}}">

    <!-- Styles / Scripts -->
    {{-- @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @else
        <style>
            /* ! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:Figtree, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.absolute{position:absolute}.relative{position:relative}.-left-20{left:-5rem}.top-0{top:0px}.-bottom-16{bottom:-4rem}.-left-16{left:-4rem}.-mx-3{margin-left:-0.75rem;margin-right:-0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.flex{display:flex}.grid{display:grid}.hidden{display:none}.aspect-video{aspect-ratio:16 / 9}.size-12{width:3rem;height:3rem}.size-5{width:1.25rem;height:1.25rem}.size-6{width:1.5rem;height:1.5rem}.h-12{height:3rem}.h-40{height:10rem}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-full{width:100%}.w-\[calc\(100\%\+8rem\)\]{width:calc(100% + 8rem)}.w-auto{width:auto}.max-w-\[877px\]{max-width:877px}.max-w-2xl{max-width:42rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.rounded-\[10px\]{border-radius:10px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:0.5rem}.rounded-md{border-radius:0.375rem}.rounded-sm{border-radius:0.125rem}.bg-\[\#FF2D20\]\/10{background-color:rgb(255 45 32 / 0.1)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-gradient-to-b{background-image:linear-gradient(to bottom, var(--tw-gradient-stops))}.from-transparent{--tw-gradient-from:transparent var(--tw-gradient-from-position);--tw-gradient-to:rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.via-white{--tw-gradient-to:rgb(255 255 255 / 0)  var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), #fff var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-white{--tw-gradient-to:#fff var(--tw-gradient-to-position)}.stroke-\[\#FF2D20\]{stroke:#FF2D20}.object-cover{object-fit:cover}.object-top{object-position:top}.p-6{padding:1.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.pt-3{padding-top:0.75rem}.text-center{text-align:center}.font-sans{font-family:Figtree, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-sm\/relaxed{font-size:0.875rem;line-height:1.625}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow-\[0px_14px_34px_0px_rgba\(0\2c 0\2c 0\2c 0\.08\)\]{--tw-shadow:0px 14px 34px 0px rgba(0,0,0,0.08);--tw-shadow-colored:0px 14px 34px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-transparent{--tw-ring-color:transparent}.ring-white\/\[0\.05\]{--tw-ring-color:rgb(255 255 255 / 0.05)}.drop-shadow-\[0px_4px_34px_rgba\(0\2c 0\2c 0\2c 0\.06\)\]{--tw-drop-shadow:drop-shadow(0px 4px 34px rgba(0,0,0,0.06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-\[0px_4px_34px_rgba\(0\2c 0\2c 0\2c 0\.25\)\]{--tw-drop-shadow:drop-shadow(0px 4px 34px rgba(0,0,0,0.25));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.selection\:bg-\[\#FF2D20\] *::selection{--tw-bg-opacity:1;background-color:rgb(255 45 32 / var(--tw-bg-opacity))}.selection\:text-white *::selection{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.selection\:bg-\[\#FF2D20\]::selection{--tw-bg-opacity:1;background-color:rgb(255 45 32 / var(--tw-bg-opacity))}.selection\:text-white::selection{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\:text-black:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.hover\:text-black\/70:hover{color:rgb(0 0 0 / 0.7)}.hover\:ring-black\/20:hover{--tw-ring-color:rgb(0 0 0 / 0.2)}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\:ring-1:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-visible\:ring-\[\#FF2D20\]:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(255 45 32 / var(--tw-ring-opacity))}@media (min-width: 640px){.sm\:size-16{width:4rem;height:4rem}.sm\:size-6{width:1.5rem;height:1.5rem}.sm\:pt-5{padding-top:1.25rem}}@media (min-width: 768px){.md\:row-span-3{grid-row:span 3 / span 3}}@media (min-width: 1024px){.lg\:col-start-2{grid-column-start:2}.lg\:h-16{height:4rem}.lg\:max-w-7xl{max-width:80rem}.lg\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.lg\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.lg\:flex-col{flex-direction:column}.lg\:items-end{align-items:flex-end}.lg\:justify-center{justify-content:center}.lg\:gap-8{gap:2rem}.lg\:p-10{padding:2.5rem}.lg\:pb-10{padding-bottom:2.5rem}.lg\:pt-0{padding-top:0px}.lg\:text-\[\#FF2D20\]{--tw-text-opacity:1;color:rgb(255 45 32 / var(--tw-text-opacity))}}@media (prefers-color-scheme: dark){.dark\:block{display:block}.dark\:hidden{display:none}.dark\:bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.dark\:bg-zinc-900{--tw-bg-opacity:1;background-color:rgb(24 24 27 / var(--tw-bg-opacity))}.dark\:via-zinc-900{--tw-gradient-to:rgb(24 24 27 / 0)  var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), #18181b var(--tw-gradient-via-position), var(--tw-gradient-to)}.dark\:to-zinc-900{--tw-gradient-to:#18181b var(--tw-gradient-to-position)}.dark\:text-white\/50{color:rgb(255 255 255 / 0.5)}.dark\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\:text-white\/70{color:rgb(255 255 255 / 0.7)}.dark\:ring-zinc-800{--tw-ring-opacity:1;--tw-ring-color:rgb(39 39 42 / var(--tw-ring-opacity))}.dark\:hover\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\:hover\:text-white\/70:hover{color:rgb(255 255 255 / 0.7)}.dark\:hover\:text-white\/80:hover{color:rgb(255 255 255 / 0.8)}.dark\:hover\:ring-zinc-700:hover{--tw-ring-opacity:1;--tw-ring-color:rgb(63 63 70 / var(--tw-ring-opacity))}.dark\:focus-visible\:ring-\[\#FF2D20\]:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(255 45 32 / var(--tw-ring-opacity))}.dark\:focus-visible\:ring-white:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(255 255 255 / var(--tw-ring-opacity))}}
        </style>
    @endif --}}

</head>

<body>

    <!-- ========== Switcher  ========== -->
    {{-- <div id="hs-overlay-switcher" class="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabindex="-1">
      <div class="ti-offcanvas-header z-10 relative">
        <h5 class="ti-offcanvas-title">
          Switcher
        </h5>
        <button type="button"
          class="ti-btn flex-shrink-0 p-0 !mb-0  transition-none text-defaulttextcolor dark:text-defaulttextcolor/80 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white  dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
          data-hs-overlay="#hs-overlay-switcher">
          <span class="sr-only">Close modal</span>
          <i class="ri-close-circle-line leading-none text-lg"></i>
        </button>
      </div>
      <div class="ti-offcanvas-body !p-0 !border-b dark:border-white/10 z-10 relative !h-auto">
        <div class="flex rtl:space-x-reverse" aria-label="Tabs" role="tablist">
          <button type="button"
            class="hs-tab-active:bg-danger/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-[0.813rem] border-0 hs-tab-active:text-danger dark:hs-tab-active:bg-danger/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-danger -mb-px bg-white font-normal text-center  text-defaulttextcolor dark:text-defaulttextcolor/80 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  active"
            id="switcher-item-1" data-hs-tab="#switcher-1" aria-controls="switcher-1" role="tab">
            Theme Style
          </button>
          <button type="button"
            class="hs-tab-active:bg-danger/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-[0.813rem] border-0 hs-tab-active:text-danger dark:hs-tab-active:bg-danger/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-danger -mb-px  bg-white font-normal text-center  text-defaulttextcolor dark:text-defaulttextcolor/80 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  dark:hover:text-gray-300"
            id="switcher-item-2" data-hs-tab="#switcher-2" aria-controls="switcher-2" role="tab">
            Theme Colors
          </button>
        </div>
      </div>
      <div class="ti-offcanvas-body !p-0 !pb-[20rem]" id="switcher-body">
        <div id="switcher-1" role="tabpanel" aria-labelledby="switcher-item-1" class="">
          <div class="">
            <p class="switcher-style-head">Theme Color Mode:</p>
            <div class="grid grid-cols-3 switcher-style">
              <div class="flex items-center">
                <input type="radio" name="theme-style" class="ti-form-radio" id="switcher-light-theme" checked>
                <label for="switcher-light-theme"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2 font-normal">Light</label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="theme-style" class="ti-form-radio" id="switcher-dark-theme">
                <label for="switcher-dark-theme"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2 font-normal">Dark</label>
              </div>
            </div>
          </div>
          <div>
            <p class="switcher-style-head">Directions:</p>
            <div class="grid grid-cols-3  switcher-style">
              <div class="flex items-center">
                <input type="radio" name="direction" class="ti-form-radio" id="switcher-ltr" checked>
                <label for="switcher-ltr" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">LTR</label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="direction" class="ti-form-radio" id="switcher-rtl">
                <label for="switcher-rtl" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">RTL</label>
              </div>
            </div>
          </div>
          <div>
            <p class="switcher-style-head">Navigation Styles:</p>
            <div class="grid grid-cols-3  switcher-style">
              <div class="flex items-center">
                <input type="radio" name="navigation-style" class="ti-form-radio" id="switcher-vertical" checked>
                <label for="switcher-vertical"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Vertical</label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="navigation-style" class="ti-form-radio" id="switcher-horizontal">
                <label for="switcher-horizontal"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Horizontal</label>
              </div>
            </div>
          </div>
          <div>
            <p class="switcher-style-head">Navigation Menu Style:</p>
            <div class="grid grid-cols-2 gap-2 switcher-style">
              <div class="flex">
                <input type="radio" name="navigation-data-menu-styles" class="ti-form-radio" id="switcher-menu-click"
                  checked>
                <label for="switcher-menu-click" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Menu
                  Click</label>
              </div>
              <div class="flex">
                <input type="radio" name="navigation-data-menu-styles" class="ti-form-radio" id="switcher-menu-hover">
                <label for="switcher-menu-hover" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Menu
                  Hover</label>
              </div>
              <div class="flex">
                <input type="radio" name="navigation-data-menu-styles" class="ti-form-radio" id="switcher-icon-click">
                <label for="switcher-icon-click" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Icon
                  Click</label>
              </div>
              <div class="flex">
                <input type="radio" name="navigation-data-menu-styles" class="ti-form-radio" id="switcher-icon-hover">
                <label for="switcher-icon-hover" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Icon
                  Hover</label>
              </div>
            </div>
          </div>
          <div class=" sidemenu-layout-styles">
            <p class="switcher-style-head">Sidemenu Layout Syles:</p>
            <div class="grid grid-cols-2 gap-2 switcher-style">
              <div class="flex">
                <input type="radio" name="sidemenu-layout-styles" class="ti-form-radio" id="switcher-default-menu" checked>
                <label for="switcher-default-menu"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal ">Default
                  Menu</label>
              </div>
              <div class="flex">
                <input type="radio" name="sidemenu-layout-styles" class="ti-form-radio" id="switcher-closed-menu">
                <label for="switcher-closed-menu" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal ">
                  Closed
                  Menu</label>
              </div>
              <div class="flex">
                <input type="radio" name="sidemenu-layout-styles" class="ti-form-radio" id="switcher-icontext-menu">
                <label for="switcher-icontext-menu" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal ">Icon
                  Text</label>
              </div>
              <div class="flex">
                <input type="radio" name="sidemenu-layout-styles" class="ti-form-radio" id="switcher-icon-overlay">
                <label for="switcher-icon-overlay" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal ">Icon
                  Overlay</label>
              </div>
              <div class="flex">
                <input type="radio" name="sidemenu-layout-styles" class="ti-form-radio" id="switcher-detached">
                <label for="switcher-detached"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal ">Detached</label>
              </div>
              <div class="flex">
                <input type="radio" name="sidemenu-layout-styles" class="ti-form-radio" id="switcher-double-menu">
                <label for="switcher-double-menu" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Double
                  Menu</label>
              </div>
            </div>
          </div>
          <div>
            <p class="switcher-style-head">Page Styles:</p>
            <div class="grid grid-cols-3  switcher-style">
              <div class="flex">
                <input type="radio" name="data-page-styles" class="ti-form-radio" id="switcher-regular" checked>
                <label for="switcher-regular"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Regular</label>
              </div>
              <div class="flex">
                <input type="radio" name="data-page-styles" class="ti-form-radio" id="switcher-classic">
                <label for="switcher-classic"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Classic</label>
              </div>
              <div class="flex">
                <input type="radio" name="data-page-styles" class="ti-form-radio" id="switcher-modern">
                <label for="switcher-modern"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal"> Modern</label>
              </div>
            </div>
          </div>
          <div>
            <p class="switcher-style-head">Layout Width Styles:</p>
            <div class="grid grid-cols-3 switcher-style">
              <div class="flex">
                <input type="radio" name="layout-width" class="ti-form-radio" id="switcher-full-width" checked> 
                <label for="switcher-full-width"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">FullWidth</label>
              </div>
              <div class="flex">
                <input type="radio" name="layout-width" class="ti-form-radio" id="switcher-boxed">
                <label for="switcher-boxed" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Boxed</label>
              </div>
            </div>
          </div>
          <div>
            <p class="switcher-style-head">Menu Positions:</p>
            <div class="grid grid-cols-3  switcher-style">
              <div class="flex">
                <input type="radio" name="data-menu-positions" class="ti-form-radio" id="switcher-menu-fixed" checked>
                <label for="switcher-menu-fixed"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Fixed</label>
              </div>
              <div class="flex">
                <input type="radio" name="data-menu-positions" class="ti-form-radio" id="switcher-menu-scroll">
                <label for="switcher-menu-scroll"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Scrollable </label>
              </div>
            </div>
          </div>
          <div>
            <p class="switcher-style-head">Header Positions:</p>
            <div class="grid grid-cols-3 switcher-style">
              <div class="flex">
                <input type="radio" name="data-header-positions" class="ti-form-radio" id="switcher-header-fixed" checked>
                <label for="switcher-header-fixed" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">
                  Fixed</label>
              </div>
              <div class="flex">
                <input type="radio" name="data-header-positions" class="ti-form-radio" id="switcher-header-scroll">
                <label for="switcher-header-scroll"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Scrollable
                </label>
              </div>
            </div>
          </div>
          <div class="">
            <p class="switcher-style-head">Loader:</p>
            <div class="grid grid-cols-3 switcher-style">
              <div class="flex">
                <input type="radio" name="page-loader" class="ti-form-radio" id="switcher-loader-enable" checked>
                <label for="switcher-loader-enable" class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">
                  Enable</label>
              </div>
              <div class="flex">
                <input type="radio" name="page-loader" class="ti-form-radio" id="switcher-loader-disable">
                <label for="switcher-loader-disable"
                  class="text-[0.813rem] text-defaulttextcolor dark:text-defaulttextcolor/80 ms-2  font-normal">Disable
                </label>
              </div>
            </div>
        </div>
        </div>
        <div id="switcher-2" class="hidden" role="tabpanel" aria-labelledby="switcher-item-2">
          <div class="theme-colors">
            <p class="switcher-style-head">Menu Colors:</p>
            <div class="flex switcher-style space-x-3 rtl:space-x-reverse">
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-white" type="radio" name="menu-colors"
                  id="switcher-menu-light">
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Light Menu
                </span>
              </div>
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-dark" type="radio" name="menu-colors"
                  id="switcher-menu-dark" checked>
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Dark Menu
                </span>
              </div>
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-primary" type="radio" name="menu-colors"
                  id="switcher-menu-primary">
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Color Menu
                </span>
              </div>
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-gradient" type="radio" name="menu-colors"
                  id="switcher-menu-gradient">
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Gradient Menu
                </span>
              </div>
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-transparent" type="radio" name="menu-colors"
                  id="switcher-menu-transparent">
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs !font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Transparent Menu
                </span>
              </div>
            </div>
            <div class="px-4 text-textmuted dark:text-textmuted/50 text-[.6875rem]"><b class="me-2 font-normal">Note:</b>If you want to change color Menu
              dynamically
              change from below Theme Primary color picker.</div>
          </div>
          <div class="theme-colors">
            <p class="switcher-style-head">Header Colors:</p>
            <div class="flex switcher-style space-x-3 rtl:space-x-reverse">
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-white !border" type="radio" name="header-colors"
                  id="switcher-header-light" checked>
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Light Header
                </span>
              </div>
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-dark" type="radio" name="header-colors"
                  id="switcher-header-dark">
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Dark Header
                </span>
              </div>
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-primary" type="radio" name="header-colors"
                  id="switcher-header-primary">
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Color Header
                </span>
              </div>
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-gradient" type="radio" name="header-colors"
                  id="switcher-header-gradient">
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Gradient Header
                </span>
              </div>
              <div class="hs-tooltip ti-main-tooltip ti-form-radio switch-select ">
                <input class="hs-tooltip-toggle ti-form-radio color-input color-transparent" type="radio"
                  name="header-colors" id="switcher-header-transparent">
                <span
                  class="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                  role="tooltip">
                  Transparent Header
                </span>
              </div>
            </div>
            <div class="px-4 text-textmuted dark:text-textmuted/50 text-[.6875rem]"><b class="me-2 !font-normal">Note:</b>If you want to change color
              Header dynamically
              change from below Theme Primary color picker.</div>
          </div>
          <div class="theme-colors">
            <p class="switcher-style-head">Theme Primary:</p>
            <div class="flex switcher-style space-x-3 rtl:space-x-reverse">
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-primary-1" type="radio" name="theme-primary"
                  id="switcher-primary">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-primary-2" type="radio" name="theme-primary"
                  id="switcher-primary1">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-primary-3" type="radio" name="theme-primary"
                  id="switcher-primary2">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-primary-4" type="radio" name="theme-primary"
                  id="switcher-primary3">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-primary-5" type="radio" name="theme-primary"
                  id="switcher-primary4">
              </div>
              <div class="ti-form-radio switch-select ps-0 mt-1 color-primary-light">
                <div class="theme-container-primary"></div>
                <div class="pickr-container-primary"></div>
              </div>
            </div>
          </div>
          <div class="theme-colors">
            <p class="switcher-style-head">Theme Background:</p>
            <div class="flex switcher-style space-x-3 rtl:space-x-reverse">
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-bg-1" type="radio" name="theme-background"
                  id="switcher-background">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-bg-2" type="radio" name="theme-background"
                  id="switcher-background1">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-bg-3" type="radio" name="theme-background"
                  id="switcher-background2">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-bg-4" type="radio" name="theme-background"
                  id="switcher-background3">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio color-input color-bg-5" type="radio" name="theme-background"
                  id="switcher-background4">
              </div>
              <div class="ti-form-radio switch-select ps-0 mt-1 color-bg-transparent">
                <div class="theme-container-background hidden"></div>
                <div class="pickr-container-background"></div>
              </div>
            </div>
          </div>
          <div class="menu-image theme-colors">
            <p class="switcher-style-head">Menu With Background Image:</p>
            <div class="flex switcher-style space-x-3 rtl:space-x-reverse flex-wrap gap-3">
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio bgimage-input bg-img1" type="radio" name="theme-images" id="switcher-bg-img">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio bgimage-input bg-img2" type="radio" name="theme-images" id="switcher-bg-img1">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio bgimage-input bg-img3" type="radio" name="theme-images" id="switcher-bg-img2">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio bgimage-input bg-img4" type="radio" name="theme-images" id="switcher-bg-img3">
              </div>
              <div class="ti-form-radio switch-select">
                <input class="ti-form-radio bgimage-input bg-img5" type="radio" name="theme-images" id="switcher-bg-img4">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ti-offcanvas-footer sm:flex justify-between">
        <a href="javascript:void(0);" id="reset-all" class="ti-btn ti-btn-danger w-full m-1">Reset</a>
      </div>
    </div> --}}
    <!-- ========== END Switcher  ========== -->
    <!-- Loader -->
    <div id="loader" >
        <img src="{{ asset('assets/images/media/loader.svg')}}" alt="">
    </div>
    <!-- Loader -->

    <div class="page">
        <!-- app-header -->
        @include('layouts.nav')
        <!-- /app-header -->
        <!-- Start::app-sidebar -->
        @include('layouts.sidebar')
        <!-- End::app-sidebar -->

        <!-- Start::app-content -->
        <div class="main-content app-content">
            <div class="container-fluid">

                <!-- Start::page-header -->
                <div class="flex items-center justify-between page-header-breadcrumb flex-wrap gap-2">
                    <div>
                        <nav>
                            <ol class="breadcrumb mb-1">
                                <li class="breadcrumb-item">
                                    <a href="javascript:void(0);">
                                         Dashboards
                                    </a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">School</li>
                            </ol>
                        </nav>
                        <h1 class="page-title font-medium text-lg mb-0">School</h1>
                    </div>
                    <div class="ti-btn-list">
                        <button class="ti-btn bg-white dark:bg-bodybg border border-defaultborder dark:border-defaultborder/10 btn-wave !my-0">
                            <i class="ri-filter-3-line align-middle me-1 leading-none"></i> Filter
                        </button>
                        <button class="ti-btn ti-btn-primary text-white-full btn-wave me-0 !border-0">
                            <i class="ri-share-forward-line me-1"></i> Share
                        </button>
                    </div>
                </div>
                <!-- End::page-header -->

               <!-- Start::Row-1 -->
                <div class="grid xxl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-x-6">
                    <div class="col">
                        <div class="box school-card">
                            <div class="box-body flex gap-2 justify-between">
                                <div class="">
                                    <span class="block mb-1">Students</span>
                                    <h5 class="mb-0 font-semibold">62,784</h5>
                                </div>
                                <div class="">
                                    <span class="text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9 12 12.72 18.82 9 12 5.28z" opacity=".2"/><path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.99-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72zm-5-3.27L5.18 9 12 5.28 18.82 9 12 12.72z"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box school-card">
                            <div class="box-body flex gap-2 justify-between">
                                <div class="">
                                    <span class="block mb-1">Teachers</span>
                                    <h5 class="mb-0 font-semibold">3,765</h5>
                                </div>
                                <div class="">
                                    <span class="text-primarytint1color">
                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M8,15c-2.7,0-5.8,1.29-6,2.01V18h12v-1C13.8,16.29,10.7,15,8,15z" opacity=".2"/><circle cx="8" cy="8" opacity=".2" r="2"/><polygon points="22,9 22,7 20,7 20,9 18,9 18,11 20,11 20,13 22,13 22,11 24,11 24,9"/><path d="M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z M8,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S6,9.1,6,8S6.9,6,8,6z"/><path d="M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z M14,18H2v-0.99C2.2,16.29,5.3,15,8,15s5.8,1.29,6,2V18z"/><path d="M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z"/><path d="M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z"/></g></g></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box school-card">
                            <div class="box-body flex gap-2 justify-between">
                                <div class="">
                                    <span class="block mb-1">Total Staff</span>
                                    <h5 class="mb-0 font-semibold">8,475</h5>
                                </div>
                                <div class="">
                                    <span class="text-primarytint2color">
                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M14,13.5h4V12h-4V13.5z M14,16.5h4V15h-4V16.5z M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9C22,7.9,21.1,7,20,7z M11,4h2v5h-2V4z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20 z M9,15c0.83,0,1.5-0.67,1.5-1.5c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5C7.5,14.33,8.17,15,9,15z M11.08,16.18 C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43C12,16.96,11.64,16.42,11.08,16.18z"/><path d="M13,11h-2c-1.1,0-2-0.9-2-2H4v11h16V9h-5C15,10.1,14.1,11,13,11z M9,12c0.83,0,1.5,0.67,1.5,1.5 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5C7.5,12.67,8.17,12,9,12z M12,18H6v-0.43c0-0.6,0.36-1.15,0.92-1.39 C7.56,15.9,8.26,15.75,9,15.75s1.44,0.15,2.08,0.43c0.55,0.24,0.92,0.78,0.92,1.39V18z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4 V13.5z" opacity=".3"/></g></g></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box school-card">
                            <div class="box-body flex gap-2 justify-between">
                                <div class="">
                                    <span class="block mb-1">Revenue</span>
                                    <h5 class="mb-0 font-semibold">$22,987</h5>
                                </div>
                                <div class="">
                                    <span class="text-primarytint3color">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2h-6z" opacity=".2"/><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/><circle cx="16" cy="12" r="1.5"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box school-card">
                            <div class="box-body flex gap-2 justify-between">
                                <div class="">
                                    <span class="block mb-1">Awards</span>
                                    <h5 class="mb-0 font-semibold">865</h5>
                                </div>
                                <div class="">
                                    <span class="text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><rect fill="none" height="24" width="24"/><path d="M12,14c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z" opacity=".2"/><path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End::Row-1 -->

                <!-- Start::Row-2 -->
				<div class="grid grid-cols-12 gap-x-6">
                    <div class="xl:col-span-7 col-span-12">
                        <div class="box">
                            <div class="box-header justify-between">
                                <div class="box-title">
                                    Attendance Report
                                </div>
                                <div class="ti-dropdown hs-dropdown">
                                    <a href="javascript:void(0);" class="ti-btn ti-btn-sm bg-light ti-dropdown-toggle hs-dropdown-toggle" data-bs-toggle="dropdown" > Sort By <i class="ri-arrow-down-s-line align-middle ms-1 inline-block"></i> </a>
                                    <ul class="ti-dropdown-menu hs-dropdown-menu hidden">
                                        <li><a class="ti-dropdown-item" href="javascript:void(0);">This Week</a></li>
                                        <li><a class="ti-dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                        <li><a class="ti-dropdown-item" href="javascript:void(0);">This Month</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="box-body">
                                <div class="flex gap-[3rem] mb-3 items-center justify-center flex-wrap flex-xl-nowrap">
                                    <div class="flex items-center gap-2 me-5">
                                        <div class="leading-none">
                                            <span class="avatar avatar-md avatar-rounded bg-primarytint2color">
                                                <i class="ri-id-card-line text-[1rem]"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <div class="font-medium text-[14px]">3,875</div>
                                            <div class="text-textmuted  dark:text-textmuted/50">Staff</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2 me-5">
                                        <div class="leading-none">
                                            <span class="avatar avatar-md avatar-rounded bg-secondary">
                                                <i class="ri-graduation-cap-line text-[1rem]"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <div class="font-medium text-[14px]">25,875</div>
                                            <div class="text-textmuted  dark:text-textmuted/50">Students</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2 me-4">
                                        <div class="leading-none">
                                            <span class="avatar avatar-md avatar-rounded bg-primary">
                                                <i class="ri-presentation-line text-[1rem]"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <div class="font-medium text-[14px]">1,687</div>
                                            <div class="text-textmuted  dark:text-textmuted/50">Teachers</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div id="attendance"></div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:col-span-5 col-span-12">
                        <div class="box overflow-hidden">
                            <div class="box-header justify-between">
                                <div class="box-title">
                                    Teachers List
                                </div>
                                <a href="javascript:void(0);" class="ti-btn ti-btn-sm bg-light text-defaulttextcolor"> View All<i class="ti ti-arrow-narrow-right ms-1"></i> </a>
                            </div>
                            <div class="box-body p-0">
                                <div class="table-responsive">
                                    <table class="ti-custom-table ti-custom-table-head">
                                        <thead>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <th scope="col">Teacher</th>
                                                <th scope="col">Qualification</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="">
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <div class="flex items-center gap-4">
                                                        <img src="../assets/images/faces/11.jpg" alt="" class="avatar avatar-sm">
                                                        <a href="javascript:void(0);" class="font-medium">John Smith</a>
                                                    </div>
                                                </td>
                                                <td><span class="text-xs text-textmuted  dark:text-textmuted/50 block">M.Ed</span></td>
                                                <td><div class="text-primary font-medium">Mathematics</div></td>
                                                <td>
                                                    <button aria-label="button" type="button" class="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i class="ri-arrow-right-s-line"></i></button>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <div class="flex items-center gap-4">
                                                        <img src="../assets/images/faces/3.jpg" alt="" class="avatar avatar-sm">
                                                        <a href="javascript:void(0);" class="font-medium">Mary Johnson</a>
                                                    </div>
                                                </td>
                                                <td><span class="text-xs text-textmuted  dark:text-textmuted/50 block">B.A. in English</span></td>
                                                <td><div class="text-secondary font-medium">English</div></td>
                                                <td>
                                                    <button aria-label="button" type="button" class="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i class="ri-arrow-right-s-line"></i></button>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <div class="flex items-center gap-4">
                                                        <img src="../assets/images/faces/4.jpg" alt="" class="avatar avatar-sm">
                                                        <a href="javascript:void(0);" class="font-medium"> Robert Davis</a>
                                                    </div>
                                                </td>
                                                <td><span class="text-xs text-textmuted  dark:text-textmuted/50 block">Ph.D. in Science</span></td>
                                                <td><div class="text-danger font-medium">Physics</div></td>
                                                <td>
                                                    <button aria-label="button" type="button" class="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i class="ri-arrow-right-s-line"></i></button>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <div class="flex items-center gap-4">
                                                        <img src="../assets/images/faces/1.jpg" alt="" class="avatar avatar-sm">
                                                        <a href="javascript:void(0);" class="font-medium"> Sarah Thompson</a>
                                                    </div>
                                                </td>
                                                <td><span class="text-xs text-textmuted  dark:text-textmuted/50 block">M.A. in History</span></td>
                                                <td><div class="text-info font-medium">History</div></td>
                                                <td>
                                                    <button aria-label="button" type="button" class="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i class="ri-arrow-right-s-line"></i></button>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <div class="flex items-center gap-4">
                                                        <img src="../assets/images/faces/15.jpg" alt="" class="avatar avatar-sm">
                                                        <a href="javascript:void(0);" class="font-medium">Michael Brown</a>
                                                    </div>
                                                </td>
                                                <td><span class="text-xs text-textmuted  dark:text-textmuted/50 block">B.Ed</span></td>
                                                <td><div class="text-success font-medium">Chemistry</div></td>
                                                <td>
                                                    <button aria-label="button" type="button" class="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i class="ri-arrow-right-s-line"></i></button>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <div class="flex items-center gap-4">
                                                        <img src="../assets/images/faces/2.jpg" alt="" class="avatar avatar-sm">
                                                        <a href="javascript:void(0);" class="font-medium">Emily Wilson</a>
                                                    </div>
                                                </td>
                                                <td><span class="text-xs text-textmuted  dark:text-textmuted/50 block">M.A. in Geography</span></td>
                                                <td><div class="text-pink font-medium">Geography</div></td>
                                                <td>
                                                    <button aria-label="button" type="button" class="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i class="ri-arrow-right-s-line"></i></button>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <div class="flex items-center gap-4">
                                                        <img src="../assets/images/faces/5.jpg" alt="" class="avatar avatar-sm">
                                                        <a href="javascript:void(0);" class="font-medium">Sarah Smith</a>
                                                    </div>
                                                </td>
                                                <td><span class="text-xs text-textmuted  dark:text-textmuted/50 block">M.A.</span></td>
                                                <td><div class="text-warning font-medium">Hindi</div></td>
                                                <td>
                                                    <button aria-label="button" type="button" class="ti-btn bg-light ti-btn-icon ti-btn-sm table-icon !m-0"><i class="ri-arrow-right-s-line"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
				<!-- End::Row-2 -->

				<!-- Start::Row-3 -->
				<div class="grid grid-cols-12 gap-x-6">
                    <div class="xxl:col-span-4 col-span-12">
                        <div class="box overflow-hidden">
                            <div class="box-header justify-between !pb-0">
                                <div class="box-title">
                                    Notice Board
                                </div>
                                <a href="javascript:void(0);" class="text-xs text-textmuted  dark:text-textmuted/50 ti-btn ti-btn-sm bg-light"> View All<i class="ti ti-arrow-narrow-right ms-1"></i> </a>
                            </div>
                            <div class="box-body p-0">
                                <div class="table-responsive">
                                    <table class="ti-custom-table ti-custom-table-head">
                                        <tbody>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="!whitespace-normal">
                                                    <div class="flex items-center gap-4">
                                                        <div class="svg-primary">
                                                            <svg class="avatar-md avatar bg-primary/10 svg-primary  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z"></path></svg>
                                                        </div>
                                                        <div class="flex-auto">
                                                            <div>
                                                                <div class="font-medium block my-1 text-[14px]">Inter-School Sports Day</div>
                                                                <p class="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Students are gearing up for the annual inter-school.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="badge bg-light text-dark">20 Mar 2024</div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="!whitespace-normal">
                                                    <div class="flex items-center gap-4">
                                                        <div class="svg-primarytint1color">
                                                            <svg class="avatar-md avatar bg-primarytint1color/10 svg-primarytint1color  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>
                                                        </div>
                                                        <div class="flex-auto">
                                                            <div>
                                                                <div class="font-medium block my-1 text-[14px]">Science Exhibition <span class="text-primarytint2color">"Science Fare"</span></div>
                                                                <p class="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Explore innovative projects and experiments by our students.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="badge bg-light text-dark">24 Mar 2024</div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="!whitespace-normal">
                                                    <div class="flex items-center gap-4">
                                                        <div class="svg-primarytint2color">
                                                            <svg  class="avatar-md avatar bg-primarytint2color/10 svg-primarytint2color  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.16L64,208.94l28.42,14.22a8,8,0,0,0,7.16,0L128,208.94l28.42,14.22a8,8,0,0,0,7.16,0L192,208.94l28.42,14.22A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM60.42,167.16a8,8,0,0,0,10.74-3.58L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16l-32-64a8,8,0,0,0-14.32,0l-32,64A8,8,0,0,0,60.42,167.16ZM96,113.89,107.06,136H84.94ZM136,128a8,8,0,0,1,8-8h16V104a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H176v16a8,8,0,0,1-16,0V136H144A8,8,0,0,1,136,128Z"></path></svg>
                                                        </div>
                                                        <div class="flex-auto">
                                                            <div>
                                                                <div class="font-medium block my-1 text-[14px]">Cultural Fest 2024</div>
                                                                <p class="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Join us for a vibrant celebration of cultural diversity</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="badge bg-light text-dark">09 Apr 2024</div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="!whitespace-normal">
                                                    <div class="flex items-center gap-4">
                                                        <div class="svg-primary3">
                                                            <svg class="avatar-md avatar bg-primarytint3color/10 !fill-primarytint3color p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>
                                                        </div>
                                                        <div class="flex-auto">
                                                            <div>
                                                                <div class="font-medium block my-1 text-[14px]">Founders' Day Celebration</div>
                                                                <p class="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Commemorating the vision and values of our school's founders.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="badge bg-light text-dark">09 Apr 2024</div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="!whitespace-normal">
                                                    <div class="flex items-center gap-4">
                                                        <div class="svg-secondary">
                                                            <svg class="avatar-md avatar bg-secondary/10 svg-secondary  p-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path></svg>
                                                        </div>
                                                        <div class="flex-auto">
                                                            <div>
                                                                <div class="font-medium block my-1 text-[14px]">Literary Week</div>
                                                                <p class="text-textmuted  dark:text-textmuted/50 text-xs mb-0">Engage in a week full of literary activities.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="badge bg-light text-dark">09 Apr 2024</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xxl:col-span-4 col-span-12">
                        <div class="box">
                            <div class="box-header justify-between">
                                <div class="box-title">
                                    Students Overview
                                </div>
                                <div class="ti-dropdown hs-dropdown">
                                    <a href="javascript:void(0);" class="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle" aria-expanded="true"> Sort By <i class="ri-arrow-down-s-line align-middle ms-1 inline-block"></i> </a>
                                    <ul class="ti-dropdown-menu hs-dropdown-menu hidden">
                                        <li><a class="ti-dropdown-item" href="javascript:void(0);">This Week</a></li>
                                         <li><a class="ti-dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                         <li><a class="ti-dropdown-item" href="javascript:void(0);">This Month</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="box-body pb-1">
                                <div id="students-applicants"></div>
                            </div>
                            <div class="box-footer p-0">
                                <div class="grid grid-cols-12 gap-x-6 mt-0">
                                    <div class="col-span-6 border-end border-inline-end-dashed text-center p-4">
                                        <p class="mb-1 font-medium">Boys</p>
                                        <h5 class="text-primary font-medium">12.34K</h5>
                                    </div>
                                    <div class="col-span-6 text-center p-4">
                                        <p class="mb-1 font-medium">Girls</p>
                                        <h5 class="text-secondary font-medium">10.19K</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xxl:col-span-4 col-span-12">
                        <div class="box">
                            <div class="box-header justify-between">
                                <div class="box-title">
                                    Activity
                                </div>
                                <a href="javascript:void(0);" class="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50"> View All<i class="ti ti-arrow-narrow-right ms-1"></i> </a>
                            </div>
                            <div class="box-body">
                                <ul class="list-none school-activity-list">
                                    <li>
                                        <div>
                                            <h6 class="mb-0 text-[13px]">Mr. Thomas Brown<span class="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">02:30PM</span></h6>
                                            <span class="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Liked a post from <span class="badge bg-secondary/10 text-secondary">Ms. Sarah Parker</span> about the upcoming school event</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h6 class="mb-0 text-[13px]">Mr. John Doe<span class="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">12:47PM</span></h6>
                                            <span class="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Updated class schedule</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h6 class="mb-0 text-[13px]">Ms. Jane Smith<span class="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">10:22AM</span></h6>
                                            <span class="block text-[13px] text-textmuted  dark:text-textmuted/50 mb-1 font-normal">Posted a <span class="text-primary3 text-[14px] font-medium">new announcement</span></span>
                                            <div class="p-2 rounded-sm bg-light text-[13px]">
                                                Reminder: Parent-Teacher meeting on Friday at 3 PM &#128197;
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h6 class="mb-0 text-[13px]">Mrs. Emily Davis<span class="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">11:30AM</span></h6>
                                            <span class="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Commented on a student's project - <span class="font-medium text-success">"Excellent Work"</span></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h6 class="mb-0 text-[13px]">Alice Johnson<span class="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">11:45AM</span></h6>
                                            <span class="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Submitted a report - <span class="font-medium text-success text-[14px]">"Science Project"</span></span>
                                        </div>
                                    </li>
                                    <li class="mb-2">
                                        <div>
                                            <h6 class="mb-0 text-[13px]">Mr. Bob Anderson<span class="text-[11px] text-textmuted  dark:text-textmuted/50 float-end">10:54AM</span></h6>
                                            <span class="block text-[13px] text-textmuted  dark:text-textmuted/50 font-normal">Reviewed a submission from <span class="badge bg-secondary/10 text-secondary">Jane Smith</span></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
				</div>
				<!-- End::Row-3 -->

				<!-- Start::Row-4 -->
                <div class="grid grid-cols-12 gap-x-6">
                    <div class="xl:col-span-8 col-span-12">
                        <div class="box">
                            <div class="box-header justify-between">
                                <div class="box-title">
                                    Star Students
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="flex flex-wrap gap-2">
                                        <div>
                                            <input class="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example">
                                        </div>
                                        <div class="ti-dropdown hs-dropdown">
                                            <a href="javascript:void(0);" class="ti-btn bg-primary text-white ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle !m-0"> Sort By<i class="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                            </a>
                                            <ul class="ti-dropdown-menu hs-dropdown-menu hidden" role="menu">
                                                <li><a class="ti-dropdown-item" href="javascript:void(0);">New</a></li>
                                                <li><a class="ti-dropdown-item" href="javascript:void(0);">Popular</a></li>
                                                <li><a class="ti-dropdown-item" href="javascript:void(0);">Relevant</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-body p-0 pt-2">
                                <div class="table-responsive">
                                    <table class="ti-custom-table ti-custom-table-head">
                                        <thead>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="">S.No</td>
                                                <td class="">ID</td>
                                                <td class="">Student</td>
                                                <td class="">Class</td>
                                                <td class="">Section</td>
                                                <td class="">Marks In %</td>
                                                <td class="">Marks In GPA</td>
                                                <td class="">Status</td>
                                                <td class="">Actions</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="">1</td>
                                                <td class="">#1116</td>
                                                <td class="">
                                                    <div class="flex items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../assets/images/faces/2.jpg" alt="img">
                                                        </a>
                                                        <a href="javascript:void(0);">Studar Little</a>
                                                    </div>
                                                </td>
                                                <td class="">IX</td>
                                                <td class="">B</td>
                                                <td class="">75%</td>
                                                <td class="">7.5</td>
                                                <td class="">
                                                    <span class="text-success font-medium">Pass</span>
                                                </td>
                                                <td class="">
                                                    <div class="ti-dropdown hs-dropdown inline-block" >
                                                        <a aria-label="anchor" href="javascript:void(0);" class="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i class="bi bi-three-dots"></i></a>
                                                        <ul class="ti-dropdown-menu hs-dropdown-menu hidden">
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Another Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Something Else Here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="">2</td>
                                                <td class="">#8547</td>
                                                <td class="">
                                                    <div class="flex items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../assets/images/faces/4.jpg" alt="img">
                                                        </a>
                                                        <a href="javascript:void(0);">Ion Somer</a>
                                                    </div>
                                                </td>
                                                <td class="">X</td>
                                                <td class="">A</td>
                                                <td class="">65%</td>
                                                <td class="">6.5</td>
                                                <td class="">
                                                    <span class="text-success font-medium">Pass</span>
                                                </td>
                                                <td class="">
                                                    <div class="ti-dropdown hs-dropdown inline-block">
                                                        <a aria-label="anchor" href="javascript:void(0);" class="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i class="bi bi-three-dots"></i></a>
                                                        <ul class="ti-dropdown-menu hs-dropdown-menu hidden">
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Another Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Something Else Here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="">3</td>
                                                <td class="">#7564</td>
                                                <td class="">
                                                    <div class="flex items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../assets/images/faces/6.jpg" alt="img">
                                                        </a>
                                                        <a href="javascript:void(0);">Shakira</a>
                                                    </div>
                                                </td>
                                                <td class="">X</td>
                                                <td class="">B</td>
                                                <td class="">25%</td>
                                                <td class="">2.5</td>
                                                <td class="">
                                                    <span class="text-danger font-medium">Fail</span>
                                                </td>
                                                <td class="">
                                                    <div class="ti-dropdown hs-dropdown inline-block">
                                                        <a aria-label="anchor" href="javascript:void(0);" class="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i class="bi bi-three-dots"></i></a>
                                                        <ul class="ti-dropdown-menu hs-dropdown-menu hidden">
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Another Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Something Else Here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="">4</td>
                                                <td class="">#1254</td>
                                                <td class="">
                                                    <div class="flex items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../assets/images/faces/8.jpg" alt="img">
                                                        </a>
                                                        <a href="javascript:void(0);">Thomas Shelby</a>
                                                    </div>
                                                </td>
                                                <td class="">IX</td>
                                                <td class="">A</td>
                                                <td class="">95%</td>
                                                <td class="">9.5</td>
                                                <td class="">
                                                    <span class="text-success font-medium">Pass</span>
                                                </td>
                                                <td class="">
                                                    <div class="ti-dropdown hs-dropdown inline-block">
                                                        <a aria-label="anchor" href="javascript:void(0);" class="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i class="bi bi-three-dots"></i></a>
                                                        <ul class="ti-dropdown-menu hs-dropdown-menu hidden">
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Another Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Something Else Here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="">5</td>
                                                <td class="">#7458</td>
                                                <td class="">
                                                    <div class="flex items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../assets/images/faces/10.jpg" alt="img">
                                                        </a>
                                                        <a href="javascript:void(0);">Stefan U</a>
                                                    </div>
                                                </td>
                                                <td class="">IX</td>
                                                <td class="">B</td>
                                                <td class="">62%</td>
                                                <td class="">6.2</td>
                                                <td class="">
                                                    <span class="text-success font-medium">Pass</span>
                                                </td>
                                                <td class="">
                                                    <div class="ti-dropdown hs-dropdown inline-block">
                                                        <a aria-label="anchor" href="javascript:void(0);" class="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i class="bi bi-three-dots"></i></a>
                                                        <ul class="ti-dropdown-menu hs-dropdown-menu hidden">
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Another Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Something Else Here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td class="">6</td>
                                                <td class="">#6325</td>
                                                <td class="">
                                                    <div class="flex items-center">
                                                        <a href="javascript:void(0);" class="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../assets/images/faces/12.jpg" alt="img">
                                                        </a>
                                                        <a href="javascript:void(0);">Michael Shreff</a>
                                                    </div>
                                                </td>
                                                <td class="">X</td>
                                                <td class="">A</td>
                                                <td class="">15%</td>
                                                <td class="">1.5</td>
                                                <td class="">
                                                    <span class="text-danger font-medium">Fail</span>
                                                </td>
                                                <td class="">
                                                    <div class="ti-dropdown hs-dropdown inline-block">
                                                        <a aria-label="anchor" href="javascript:void(0);" class="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" ><i class="bi bi-three-dots"></i></a>
                                                        <ul class="ti-dropdown-menu hs-dropdown-menu hidden">
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Another Action</a></li>
                                                            <li><a href="javascript:void(0);" class="ti-dropdown-item">Something Else Here</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="box-footer">
                                <div class="flex items-center flex-wrap bg-light p-4 py-2 rounded-md my-1">
                                    <div> Showing 5 Entries <i class="bi bi-arrow-right ms-2 font-medium"></i> </div>
                                    <div class="ms-auto py-2">
                                        <nav aria-label="" class="">
                                            <ul class="ti-pagination mb-0 !p-0 justify-end float-end">
                                                <li class="page-item disabled"> <a
                                                        class="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !border-e-0 !rounded-tr-none !rounded-br-none">Previous</a>
                                                </li>
                                                <li class="page-item"><a
                                                        class="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0"
                                                        href="javascript:void(0);">1</a></li>
                                                <li class="page-item " aria-current="page"> <a
                                                        class="page-link active px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0"
                                                        href="javascript:void(0);">2</a> </li>
                                                <li class="page-item"> <a
                                                        class="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-tl-none !rounded-bl-none !border-s-0"
                                                        href="javascript:void(0);">Next</a> </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:col-span-4 col-span-12">
                        <div class="box overflow-hidden">
                            <div class="box-header justify-between">
                                <div class="box-title">
                                    Exam Results
                                </div>
                                <a href="javascript:void(0);" class="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50"> View All<i class="ti ti-arrow-narrow-right ms-1"></i> </a>
                            </div>
                            <div class="box-body p-0">
                                <div class="table-responsive">
                                    <table class="ti-custom-table ti-custom-table-head">
                                        <thead>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <th>ID</th>
                                                <th>Student</th>
                                                <th>Subject</th>
                                                <th>Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>#8547</td>
                                                <td>
                                                    <div class="flex items-center gap-2">
                                                        <div>
                                                            <span class="avatar avatar-sm">
                                                                <img src="../assets/images/faces/4.jpg" alt="img">
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="block font-semibold leading-none mb-1">Ion Somer</span>
                                                            <span class="text-[13px] text-textmuted  dark:text-textmuted/50">Science</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Science</td>
                                                <td class="text-success">92%</td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>#7564</td>
                                                <td>
                                                    <div class="flex items-center gap-2">
                                                        <div>
                                                            <span class="avatar avatar-sm">
                                                                <img src="../assets/images/faces/6.jpg" alt="img">
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="block font-semibold leading-none mb-1">Shakira</span>
                                                            <span class="text-[13px] text-textmuted  dark:text-textmuted/50">English</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>English</td>
                                                <td class="text-success">78%</td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>#1254</td>
                                                <td>
                                                    <div class="flex items-center gap-2">
                                                        <div>
                                                            <span class="avatar avatar-sm">
                                                                <img src="../assets/images/faces/8.jpg" alt="img">
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="block font-semibold leading-none mb-1">Thomas Shelby</span>
                                                            <span class="text-[13px] text-textmuted  dark:text-textmuted/50">History</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>History</td>
                                                <td class="text-success">88%</td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>#7458</td>
                                                <td>
                                                    <div class="flex items-center gap-2">
                                                        <div>
                                                            <span class="avatar avatar-sm">
                                                                <img src="../assets/images/faces/10.jpg" alt="img">
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="block font-semibold leading-none mb-1">Stefan U</span>
                                                            <span class="text-[13px] text-textmuted  dark:text-textmuted/50">Geography</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Geography</td>
                                                <td class="text-secondary">65%</td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>#6325</td>
                                                <td>
                                                    <div class="flex items-center gap-2">
                                                        <div>
                                                            <span class="avatar avatar-sm">
                                                                <img src="../assets/images/faces/12.jpg" alt="img">
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="block font-semibold leading-none mb-1">Michael Shreff</span>
                                                            <span class="text-[13px] text-textmuted  dark:text-textmuted/50">Physics</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Physics</td>
                                                <td class="text-success">80%</td>
                                            </tr>
                                            <tr class="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>#2321</td>
                                                <td>
                                                    <div class="flex items-center gap-2">
                                                        <div>
                                                            <span class="avatar avatar-sm">
                                                                <img src="../assets/images/faces/4.jpg" alt="img">
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="block font-semibold leading-none mb-1">Leo Phllip</span>
                                                            <span class="text-[13px] text-textmuted  dark:text-textmuted/50">Chemistry</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Chemistry</td>
                                                <td class="text-success">83%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<!-- End::Row-4 -->
                
            </div>
        </div> 
        <!-- End::app-content -->

        @include('layouts.footer')

        <div class="hs-overlay ti-modal hidden" id="header-responsive-search" tabindex="-1" aria-labelledby="header-responsive-search" aria-hidden="true">
            <div class="ti-modal-box">
                <div class="ti-modal-dialog">
                    <div class="ti-modal-content">
                        <div class="ti-modal-body">
                            <div class="input-group">
                                <input type="text" class="form-control border-end-0 !border-s" placeholder="Search Anything ..."
                                    aria-label="Search Anything ..." aria-describedby="button-addon2">
                                <button class="ti-btn ti-btn-primary !m-0" type="button"
                                    id="button-addon2"><i class="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
    <!-- Scroll To Top -->
    <div class="scrollToTop">
        <span class="arrow"><i class="ti ti-arrow-narrow-up text-xl"></i></span>
    </div>
    <div id="responsive-overlay"></div>
    <!-- Scroll To Top -->

    <!-- Switch JS -->
    <script src="{{ asset('assets/js/switch.js')}}"></script>

    <!-- Popper JS -->
    <script src="{{ asset('assets/libs/@popperjs/core/umd/popper.min.js')}}"></script>

    <!-- Preline JS -->
    <script src="{{ asset('assets/libs/preline/preline.js')}}"></script>

    <!-- Defaultmenu JS -->
    <script src="{{ asset('assets/js/defaultmenu.min.js')}}"></script>

    <!-- Node Waves JS-->
    <script src="{{ asset('assets/libs/node-waves/waves.min.js')}}"></script>

    <!-- Sticky JS -->
    <script src="{{ asset('assets/js/sticky.js')}}"></script>

    <!-- Simplebar JS -->
    <script src="{{ asset('assets/libs/simplebar/simplebar.min.js')}}"></script>
    <script src="{{ asset('assets/js/simplebar.js')}}"></script>

    <!-- Auto Complete JS -->
    <script src="{{ asset('assets/libs/@tarekraafat/autocomplete.js/autoComplete.min.js')}}"></script>

    <!-- Color Picker JS -->
    <script src="{{ asset('assets/libs/@simonwep/pickr/pickr.es5.min.js')}}"></script>

    <!-- Date & Time Picker JS -->
    <script src="{{ asset('assets/libs/flatpickr/flatpickr.min.js')}}"></script>


    <!-- Apex Charts JS -->
    <script src="{{ asset('assets/libs/apexcharts/apexcharts.min.js')}}"></script>

    <!-- Custom JS -->
    <script src="{{ asset('assets/js/custom.js')}}"></script>

    <!-- HRM Dashboard JS -->
    <script src="{{ asset('assets/js/school-dashboard.js')}}"></script>
 
    
    <!-- Custom-Switcher JS -->
    <script src="{{ asset('assets/js/custom-switcher.min.js')}}"></script>
    
</body>

</html> 