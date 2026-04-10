// ============================================
// AURORA STORE - UNIFIED APPLICATION (FIXED)
// ============================================

(() => {
  "use strict";

  // Storage Keys
  const STORAGE_KEYS = {
    theme: "aurora-theme",
    dir: "aurora-dir",
    cart: "aurora-cart",
    user: "aurora-user",
    lang: "aurora-lang",
  };

  const root = document.documentElement;

  // ==========================================
  // PRODUCT DATABASE (All 8 Products)
  // ==========================================
  const PRODUCTS = [
    {
      id: 1,
      title: "Aero Run Premium Sneakers",
      category: "wearables",
      price: 129,
      oldPrice: 159,
      rating: 4.8,
      reviews: 128,
      sku: "AR-2026-001",
      brand: "Aurora Sport",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Experience ultimate comfort with the Aero Run Premium Sneakers. Designed for athletes and casual wearers alike, these sneakers feature advanced cushioning technology and breathable materials that keep your feet cool and comfortable all day long.",
      features: [
        "Advanced cushioning system",
        "Breathable mesh upper",
        "Non-slip rubber outsole",
        "Lightweight design (250g)"
      ],
      specs: {
        Material: "Premium Synthetic Leather & Mesh",
        Dimensions: "30 x 20 x 10 cm",
        Weight: "250g per shoe",
        Origin: "Designed in USA, Made in Vietnam",
        Warranty: "2 Years Limited Warranty"
      },
      colors: [
        { name: "black", hex: "#1a1a1a" },
        { name: "white", hex: "#f5f5f5" },
        { name: "blue", hex: "#4f46e5" },
        { name: "green", hex: "#10b981" }
      ],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      badges: ["new", "bestseller"]
    },
    {
      id: 2,
      title: "Cloud Cotton Tee",
      category: "wearables",
      price: 39,
      oldPrice: 49,
      rating: 4.5,
      reviews: 89,
      sku: "AR-2026-002",
      brand: "Aurora Basics",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80"
      ],
      description: "Premium organic cotton t-shirt with a relaxed fit. Soft, breathable, and sustainably made.",
      features: ["100% Organic Cotton", "Relaxed fit", "Machine washable", "Eco-friendly dyes"],
      specs: { Material: "100% Organic Cotton", Weight: "180g", Origin: "Made in Portugal" },
      colors: [{ name: "white", hex: "#f5f5f5" }, { name: "black", hex: "#1a1a1a" }, { name: "gray", hex: "#6b7280" }],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      badges: ["bestseller"]
    },
    {
      id: 3,
      title: "Axis Travel Pack",
      category: "wearables",
      price: 159,
      rating: 4.7,
      reviews: 64,
      sku: "AR-2026-003",
      brand: "Aurora Gear",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
      images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80"],
      description: "Vegan leather backpack with laptop compartment and multiple pockets. Perfect for work or travel.",
      features: ["Vegan leather", "Laptop compartment (15-inch)", "Water resistant", "USB charging port"],
      specs: { Material: "Vegan Leather", Dimensions: "45 x 30 x 15 cm", Weight: "800g" },
      colors: [{ name: "brown", hex: "#92400e" }, { name: "black", hex: "#1a1a1a" }],
      sizes: ["One Size"],
      inStock: true,
      badges: ["new"]
    },
    {
      id: 4,
      title: "Arc Desk Lamp",
      category: "home-office",
      price: 74,
      oldPrice: 89,
      rating: 4.6,
      reviews: 42,
      sku: "AR-2026-004",
      brand: "Aurora Home",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=80",
      images: ["https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80"],
      description: "Minimalist LED desk lamp with adjustable brightness and color temperature. Eye-care technology.",
      features: ["Adjustable brightness", "3 color temperatures", "Touch controls", "USB charging port"],
      specs: { Material: "Aluminum", Dimensions: "40 x 15 x 40 cm", Weight: "1.2kg" },
      colors: [{ name: "white", hex: "#f5f5f5" }, { name: "black", hex: "#1a1a1a" }],
      sizes: ["One Size"],
      inStock: true,
      badges: []
    },
    {
      id: 5,
      title: "Focus Mechanical Keyboard",
      category: "home-office",
      price: 142,
      rating: 4.9,
      reviews: 156,
      sku: "AR-2026-005",
      brand: "Aurora Tech",
      image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
      images: ["https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1000&q=80"],
      description: "Wireless mechanical keyboard with customizable RGB backlighting. Tactile switches for productivity.",
      features: ["Wireless (Bluetooth/USB-C)", "RGB Backlighting", "Hot-swappable switches", "4000mAh battery"],
      specs: { Material: "Aluminum & PBT Plastic", Dimensions: "32 x 12 x 3 cm", Weight: "850g" },
      colors: [{ name: "black", hex: "#1a1a1a" }, { name: "white", hex: "#f5f5f5" }],
      sizes: ["One Size"],
      inStock: true,
      badges: ["bestseller"]
    },
    {
      id: 6,
      title: "Calm Diffuser Set",
      category: "wellness",
      price: 58,
      rating: 4.4,
      reviews: 38,
      sku: "AR-2026-006",
      brand: "Aurora Wellness",
      image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=700&q=80",
      images: ["https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1000&q=80"],
      description: "Ultrasonic essential oil diffuser with 4 timer settings. Includes 6 premium essential oils.",
      features: ["Ultrasonic technology", "7 LED colors", "Auto shut-off", "400ml capacity"],
      specs: { Material: "BPA-free Plastic & Wood", Dimensions: "15 x 15 x 10 cm", Weight: "400g" },
      colors: [{ name: "wood", hex: "#d4a373" }, { name: "white", hex: "#f5f5f5" }],
      sizes: ["One Size"],
      inStock: true,
      badges: ["new"]
    },
    {
      id: 7,
      title: "Balance Yoga Mat",
      category: "wellness",
      price: 86,
      oldPrice: 99,
      rating: 4.5,
      reviews: 72,
      sku: "AR-2026-007",
      brand: "Aurora Wellness",
      image: "https://images.unsplash.com/photo-1593810451137-5dc55105dace?auto=format&fit=crop&w=700&q=80",
      images: ["https://images.unsplash.com/photo-1593810451137-5dc55105dace?auto=format&fit=crop&w=1000&q=80"],
      description: "Eco-friendly non-slip yoga mat with alignment markers. 6mm thickness for joint protection.",
      features: ["Eco-friendly TPE material", "Alignment markers", "Non-slip texture", "Carrying strap included"],
      specs: { Material: "TPE Eco-friendly", Dimensions: "183 x 61 x 0.6 cm", Weight: "900g" },
      colors: [{ name: "purple", hex: "#8b5cf6" }, { name: "green", hex: "#10b981" }, { name: "blue", hex: "#3b82f6" }],
      sizes: ["One Size"],
      inStock: true,
      badges: []
    },
    {
      id: 8,
      title: "Ergo Support Chair",
      category: "home-office",
      price: 219,
      oldPrice: 279,
      rating: 4.7,
      reviews: 94,
      sku: "AR-2026-008",
      brand: "Aurora Home",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=80",
      images: ["https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1000&q=80"],
      description: "Fully adjustable ergonomic chair with lumbar support. Breathable mesh back for comfort.",
      features: ["Adjustable lumbar support", "Breathable mesh back", "4D armrests", "Recline lock"],
      specs: { Material: "Mesh & Aluminum", Dimensions: "70 x 70 x 110 cm", Weight: "18kg" },
      colors: [{ name: "black", hex: "#1a1a1a" }, { name: "gray", hex: "#6b7280" }],
      sizes: ["One Size"],
      inStock: true,
      badges: ["bestseller"]
    }
  ];

  // ==========================================
  // TRANSLATIONS
  // ==========================================
  const TRANSLATIONS = {
    en: {
      "brand.name": "Aurora Store",
      "nav.home": "Home",
      "nav.shop": "Shop",
      "nav.product": "Products",
      "nav.cart": "Cart",
      "nav.login": "Login",
      "footer.copyright": "© 2026 Aurora Store. Crafted for modern commerce.",
      "footer.create": "Create account",
      "footer.checkout": "Checkout",
      "hero.eyebrow": "New Collection 2026",
      "hero.title": "Premium essentials designed for everyday flow.",
      "hero.text": "Discover curated products crafted for comfort, performance, and timeless style. Fast shipping, easy returns, and a seamless shopping experience.",
      "hero.shopNow": "Shop now",
      "hero.viewProduct": "View featured product",
      "categories.title": "Shop by category",
      "categories.browse": "Browse all",
      "categories.wearables": "Wearables",
      "categories.wearablesDesc": "Smart accessories with modern comfort.",
      "categories.homeOffice": "Home Office",
      "categories.homeOfficeDesc": "Focused setups for creators and builders.",
      "categories.wellness": "Wellness",
      "categories.wellnessDesc": "Tools that support healthier routines.",
      "products.featured": "Featured products",
      "products.seeMore": "See more",
      "product.addToCart": "Add to Cart",
      "product.buyNow": "Buy Now",
      "product.quantity": "Quantity",
      "product.inStock": "In Stock - Ships within 24 hours",
      "product.outOfStock": "Out of Stock",
      "product.taxInfo": "Tax included. Shipping calculated at checkout.",
      "product.secure": "Secure Checkout",
      "product.freeShipping": "Free Shipping over $100",
      "product.returns": "30-Day Returns",
      "product.related": "You May Also Like",
      "product.viewAll": "View All",
      "newsletter.title": "Get 15% off your first order",
      "newsletter.subtitle": "Subscribe for product drops, offers, and design stories.",
      "newsletter.emailLabel": "Email address",
      "newsletter.placeholder": "you@example.com",
      "newsletter.button": "Subscribe",
      "shop.eyebrow": "Curated Catalog",
      "shop.title": "Find what fits your everyday style.",
      "shop.subtitle": "Filter by category and sort by price or popularity to find products faster.",
      "shop.filters": "Filters",
      "shop.clear": "Clear",
      "shop.category": "Category",
      "shop.price": "Price",
      "shop.priceAll": "All Prices",
      "shop.priceUnder": "Under $75",
      "shop.priceRange": "$75 - $150",
      "shop.priceOver": "Over $150",
      "shop.sortBy": "Sort by",
      "shop.sortFeatured": "Featured",
      "shop.sortPriceLow": "Price: Low to High",
      "shop.sortPriceHigh": "Price: High to Low",
      "shop.sortRating": "Top Rated",
      "shop.noResults": "No products match your filters",
      "shop.tryAgain": "Try removing one or more filters to view more items.",
      "shop.reset": "Reset filters",
      "cart.title": "Your Cart",
      "cart.emptyTitle": "Your cart is empty",
      "cart.emptyText": "Looks like you haven't added anything yet.",
      "cart.startShopping": "Start Shopping",
      "cart.subtotal": "Subtotal",
      "cart.shipping": "Shipping",
      "cart.free": "Free",
      "cart.total": "Total",
      "cart.checkout": "Proceed to Checkout",
      "cart.remove": "Remove",
      "checkout.title": "Checkout",
      "checkout.fullName": "Full Name *",
      "checkout.email": "Email Address *",
      "checkout.address": "Shipping Address *",
      "checkout.card": "Card Number *",
      "checkout.placeOrder": "Place Order",
      "login.title": "Welcome back",
      "login.subtitle": "Login to access your account",
      "login.email": "Email",
      "login.password": "Password",
      "login.button": "Sign In",
      "login.noAccount": "Don't have an account?",
      "login.create": "Create one",
      "signup.title": "Create account",
      "signup.subtitle": "Join Aurora Store for exclusive offers",
      "signup.name": "Full Name",
      "signup.email": "Email",
      "signup.password": "Password (min. 6 characters)",
      "signup.confirm": "Confirm Password",
      "signup.button": "Sign Up",
      "signup.hasAccount": "Already have an account?",
      "signup.login": "Sign in",
      "tabs.description": "Description",
      "tabs.specifications": "Specifications",
      "tabs.reviews": "Reviews",
      "tabs.shipping": "Shipping & Returns",
      "tabs.about": "About this product",
      "tabs.features": "Key Features",
      "reviews.basedOn": "Based on reviews",
      "reviews.write": "Write a Review",
      "shipping.fast": "Fast Delivery",
      "shipping.fastDesc": "Orders processed within 24 hours.",
      "shipping.returns": "Free Returns",
      "shipping.returnsDesc": "30-day return policy.",
      "shipping.secure": "Secure Packaging",
      "shipping.secureDesc": "Carefully packaged items.",
      "toast.added": "Added to cart",
      "toast.removed": "Removed from cart",
      "toast.subscribed": "Successfully subscribed!",
      "toast.order": "Order placed successfully!",
      "toast.lang": "Language switched to English"
    },
    ar: {
      "brand.name": "متجر أورورا",
      "nav.home": "الرئيسية",
      "nav.shop": "التسوق",
      "nav.product": "المنتجات",
      "nav.cart": "السلة",
      "nav.login": "تسجيل الدخول",
      "footer.copyright": "© ٢٠٢٦ متجر أورورا. صمم للتجارة العصرية.",
      "footer.create": "إنشاء حساب",
      "footer.checkout": "إتمام الشراء",
      "hero.eyebrow": "تشكيلة ٢٠٢٦ الجديدة",
      "hero.title": "منتجات ممتازة مصممة لتناسب يومك.",
      "hero.text": "اكتشف منتجات مختارة بعناية للراحة والأداء والأناقة. شحن سريع وإرجاع سهل.",
      "hero.shopNow": "تسوق الآن",
      "hero.viewProduct": "عرض المنتج المميز",
      "categories.title": "تسوق حسب الفئة",
      "categories.browse": "عرض الكل",
      "categories.wearables": "إكسسوارات",
      "categories.wearablesDesc": "إكسسوارات ذكية مع راحة عصرية.",
      "categories.homeOffice": "مكتب منزلي",
      "categories.homeOfficeDesc": "إعدادات مخصصة للمبدعين.",
      "categories.wellness": "العافية",
      "categories.wellnessDesc": "أدوات تدعم روتينك الصحي.",
      "products.featured": "منتجات مميزة",
      "products.seeMore": "المزيد",
      "product.addToCart": "أضف إلى السلة",
      "product.buyNow": "اشترِ الآن",
      "product.quantity": "الكمية",
      "product.inStock": "متوفر - الشحن خلال ٢٤ ساعة",
      "product.outOfStock": "غير متوفر",
      "product.taxInfo": "الضريبة مشمولة. يُحسب الشحن عند الدفع.",
      "product.secure": "دفع آمن",
      "product.freeShipping": "شحن مجاني للطلبات فوق ١٠٠$",
      "product.returns": "إرجاع خلال ٣٠ يوم",
      "product.related": "قد يعجبك أيضاً",
      "product.viewAll": "عرض الكل",
      "newsletter.title": "احصل على خصم ١٥٪ على طلبك الأول",
      "newsletter.subtitle": "اشترك للحصول على العروض والأخبار الحصرية.",
      "newsletter.emailLabel": "البريد الإلكتروني",
      "newsletter.placeholder": "your@email.com",
      "newsletter.button": "اشترك",
      "shop.eyebrow": "المجموعة المختارة",
      "shop.title": "ابحث عن ما يناسب أسلوبك.",
      "shop.subtitle": "صفّح حسب الفئة ورتب حسب السعر للعثور على منتجاتك بسرعة.",
      "shop.filters": "الفلاتر",
      "shop.clear": "مسح",
      "shop.category": "الفئة",
      "shop.price": "السعر",
      "shop.priceAll": "جميع الأسعار",
      "shop.priceUnder": "أقل من ٧٥$",
      "shop.priceRange": "٧٥$ - ١٥٠$",
      "shop.priceOver": "أكثر من ١٥٠$",
      "shop.sortBy": "ترتيب حسب",
      "shop.sortFeatured": "المميز",
      "shop.sortPriceLow": "السعر: من الأقل للأعلى",
      "shop.sortPriceHigh": "السعر: من الأعلى للأقل",
      "shop.sortRating": "الأعلى تقييماً",
      "shop.noResults": "لا توجد منتجات تطابق الفلاتر",
      "shop.tryAgain": "حاول إزالة بعض الفلاتر لعرض المزيد.",
      "shop.reset": "إعادة تعيين",
      "cart.title": "سلة التسوق",
      "cart.emptyTitle": "سلتك فارغة",
      "cart.emptyText": "يبدو أنك لم تضف أي منتجات بعد.",
      "cart.startShopping": "ابدأ التسوق",
      "cart.subtotal": "المجموع الفرعي",
      "cart.shipping": "الشحن",
      "cart.free": "مجاني",
      "cart.total": "الإجمالي",
      "cart.checkout": "إتمام الشراء",
      "cart.remove": "إزالة",
      "checkout.title": "إتمام الشراء",
      "checkout.fullName": "الاسم الكامل *",
      "checkout.email": "البريد الإلكتروني *",
      "checkout.address": "عنوان الشحن *",
      "checkout.card": "رقم البطاقة *",
      "checkout.placeOrder": "تأكيد الطلب",
      "login.title": "مرحباً بعودتك",
      "login.subtitle": "سجل الدخول للوصول إلى حسابك",
      "login.email": "البريد الإلكتروني",
      "login.password": "كلمة المرور",
      "login.button": "تسجيل الدخول",
      "login.noAccount": "ليس لديك حساب؟",
      "login.create": "أنشئ حساب",
      "signup.title": "إنشاء حساب",
      "signup.subtitle": "انضم إلينا للحصول على عروض حصرية",
      "signup.name": "الاسم الكامل",
      "signup.email": "البريد الإلكتروني",
      "signup.password": "كلمة المرور (٦ أحرف على الأقل)",
      "signup.confirm": "تأكيد كلمة المرور",
      "signup.button": "إنشاء حساب",
      "signup.hasAccount": "لديك حساب بالفعل؟",
      "signup.login": "تسجيل الدخول",
      "tabs.description": "الوصف",
      "tabs.specifications": "المواصفات",
      "tabs.reviews": "المراجعات",
      "tabs.shipping": "الشحن والإرجاع",
      "tabs.about": "عن هذا المنتج",
      "tabs.features": "المميزات الرئيسية",
      "reviews.basedOn": "بناءً على التقييمات",
      "reviews.write": "كتابة مراجعة",
      "shipping.fast": "توصيل سريع",
      "shipping.fastDesc": "تجهيز الطلبات خلال ٢٤ ساعة.",
      "shipping.returns": "إرجاع مجاني",
      "shipping.returnsDesc": "سياسة إرجاع لمدة ٣٠ يوم.",
      "shipping.secure": "تغليف آمن",
      "shipping.secureDesc": "تغليف المنتجات بعناية.",
      "toast.added": "تمت الإضافة إلى السلة",
      "toast.removed": "تمت الإزالة من السلة",
      "toast.subscribed": "تم الاشتراك بنجاح!",
      "toast.order": "تم تأكيد الطلب بنجاح!",
      "toast.lang": "تم التبديل إلى العربية"
    }
  };

  let currentLang = "en";

  // Safe translation function
  const t = (key) => TRANSLATIONS[currentLang]?.[key] || key;

  // ==========================================
  // STORAGE HELPERS
  // ==========================================
  const getStored = (key, fallback = null) => {
    try {
      const value = window.localStorage.getItem(key);
      return value ?? fallback;
    } catch {
      return fallback;
    }
  };

  const setStored = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {}
  };

  // ==========================================
  // CART SYSTEM
  // ==========================================
  const getCart = () => {
    try {
      const raw = getStored(STORAGE_KEYS.cart, "[]");
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const setCart = (items) => {
    setStored(STORAGE_KEYS.cart, JSON.stringify(items));
    updateCartUI();
    window.dispatchEvent(new CustomEvent("cart-updated"));
  };

  const getCartCount = () => getCart().reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (productId, quantity = 1) => {
    const cart = getCart();
    const existing = cart.find((item) => item.productId === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }

    setCart(cart);
    const product = PRODUCTS.find((p) => p.id === productId);
    showToast(`${product?.title || "Product"} ${t("toast.added")}`);
  };

  const removeFromCart = (productId) => {
    const cart = getCart().filter((item) => item.productId !== productId);
    setCart(cart);
    showToast(t("toast.removed"));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    const cart = getCart();
    const item = cart.find((i) => i.productId === productId);
    if (item) {
      item.quantity = newQuantity;
      setCart(cart);
    }
  };

  const updateCartUI = () => {
    const count = getCartCount();
    document.querySelectorAll("[data-cart-count]").forEach((node) => {
      node.textContent = String(count);
    });
  };

  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================
  const showToast = (message, type = "success") => {
    const stack = document.querySelector("[data-toast-stack]");
    if (!stack) return;

    const toast = document.createElement("div");
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <div class="toast__icon">${type === "success" ? "✓" : "!"}</div>
      <div>${message}</div>
    `;
    stack.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add("toast--visible"));
    setTimeout(() => {
      toast.classList.add("toast--hiding");
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  };

  // ==========================================
  // THEME SYSTEM
  // ==========================================
  const initTheme = () => {
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = getStored(STORAGE_KEYS.theme);
    const initialTheme = storedTheme || (preferredDark ? "dark" : "light");
    root.setAttribute("data-theme", initialTheme);

    const icon = document.querySelector("[data-theme-icon]");
    if (icon) icon.textContent = initialTheme === "dark" ? "☀️" : "🌙";

    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        if (icon) icon.textContent = next === "dark" ? "☀️" : "🌙";
        setStored(STORAGE_KEYS.theme, next);
      });
    }
  };

  // ==========================================
  // LANGUAGE SYSTEM
  // ==========================================
  const applyLanguage = (lang) => {
    currentLang = lang;
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    
    if (lang === "ar") {
      root.setAttribute("dir", "rtl");
    } else {
      root.setAttribute("dir", "ltr");
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (TRANSLATIONS[lang]?.[key]) {
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.placeholder = TRANSLATIONS[lang][key];
        } else {
          el.textContent = TRANSLATIONS[lang][key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (TRANSLATIONS[lang]?.[key]) {
        el.placeholder = TRANSLATIONS[lang][key];
      }
    });
  };

  const initLanguage = () => {
    const storedLang = getStored(STORAGE_KEYS.lang, "en");
    applyLanguage(storedLang);

    const btn = document.querySelector("[data-lang-toggle]");
    const langIcon = document.querySelector("[data-lang-icon]");
    
    if (btn) {
      btn.addEventListener("click", () => {
        const newLang = currentLang === "en" ? "ar" : "en";
        applyLanguage(newLang);
        setStored(STORAGE_KEYS.lang, newLang);
        if (langIcon) langIcon.textContent = newLang === "ar" ? "🇸🇦 عربي" : "🇬🇧 EN";
        showToast(t("toast.lang"));
        initShopPage();
        initProductDetailPage();
        renderCartPage();
      });
      
      if (langIcon) langIcon.textContent = storedLang === "ar" ? "🇸🇦 عربي" : "🇬🇧 EN";
    }
  };

  // ==========================================
  // NAVIGATION
  // ==========================================
  const initNavigation = () => {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-active");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  };

  // ==========================================
  // NEWSLETTER
  // ==========================================
  const initNewsletter = () => {
    const form = document.querySelector("[data-newsletter-form]");
    const feedback = document.querySelector("[data-form-feedback]");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput?.value.trim() || "";
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (feedback) {
          feedback.textContent = "Please enter a valid email.";
          feedback.className = "form-feedback is-error";
        }
        return;
      }

      if (feedback) {
        feedback.textContent = t("toast.subscribed");
        feedback.className = "form-feedback is-success";
      }
      form.reset();
      showToast(t("toast.subscribed"));
    });
  };

  // ==========================================
  // FEATURED PRODUCTS (Home Page)
  // ==========================================
  const initFeaturedProducts = () => {
    const container = document.getElementById("featured-products");
    if (!container) return;

    const featured = PRODUCTS.slice(0, 4);
    
    container.innerHTML = featured.map(product => `
      <article class="card product-card">
        <div class="product-card__media">
          <a href="./product-detail.html?id=${product.id}">
            <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
          </a>
          <div class="product-card__overlay">
            <button class="btn btn--primary" onclick="event.preventDefault(); window.addToCart(${product.id})">
              ${t("product.addToCart")}
            </button>
          </div>
        </div>
        <div class="product-card__body">
          <div class="product-card__meta-top">
            <span class="product-card__category">${product.category}</span>
            <span class="product-card__rating">⭐ ${product.rating}</span>
          </div>
          <h3 class="product-card__title">
            <a href="./product-detail.html?id=${product.id}">${product.title}</a>
          </h3>
          <div class="product-card__footer">
            <span class="product-card__price">$${product.price}</span>
            <a href="./product-detail.html?id=${product.id}" class="link">View</a>
          </div>
        </div>
      </article>
    `).join('');
  };

  // ==========================================
  // SHOP PAGE
  // ==========================================
  const initShopPage = () => {
    if (!document.querySelector("[data-shop-page]")) return;

    const grid = document.querySelector("[data-shop-grid]");
    const resultCount = document.querySelector("[data-result-count]");
    const sortSelect = document.querySelector("[data-sort-select]");
    const emptyState = document.querySelector("[data-empty-state]");
    const categoryInputs = document.querySelectorAll('input[name="category"]');
    const priceInputs = document.querySelectorAll('input[name="price"]');
    const clearButtons = document.querySelectorAll("[data-clear-filters]");

    if (!grid) return;

    const getSelectedCategories = () => 
      Array.from(categoryInputs).filter(i => i.checked).map(i => i.value);
    
    const getSelectedPrice = () => 
      Array.from(priceInputs).find(i => i.checked)?.value || "all";

    const filterProducts = () => {
      const categories = getSelectedCategories();
      const priceRange = getSelectedPrice();
      const sortBy = sortSelect?.value || "featured";

      let filtered = PRODUCTS.filter(p => {
        const catMatch = categories.length === 0 || categories.includes(p.category);
        let priceMatch = true;
        if (priceRange === "under-75") priceMatch = p.price < 75;
        else if (priceRange === "75-150") priceMatch = p.price >= 75 && p.price <= 150;
        else if (priceRange === "over-150") priceMatch = p.price > 150;
        return catMatch && priceMatch;
      });

      if (sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
      if (sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
      if (sortBy === "rating-desc") filtered.sort((a, b) => b.rating - a.rating);

      if (resultCount) {
        resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "product" : "products"}`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = "";
        if (emptyState) emptyState.hidden = false;
      } else {
        if (emptyState) emptyState.hidden = true;
        grid.innerHTML = filtered.map(product => `
          <article class="card product-card">
            <div class="product-card__media">
              <a href="./product-detail.html?id=${product.id}">
                <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
              </a>
            </div>
            <div class="product-card__body">
              <h3 class="product-card__title">
                <a href="./product-detail.html?id=${product.id}">${product.title}</a>
              </h3>
              <p class="product-card__meta">${product.category} · ⭐ ${product.rating}</p>
              <div class="product-card__footer">
                <strong>$${product.price}</strong>
                <button class="btn btn--secondary" onclick="window.addToCart(${product.id})">
                  ${t("product.addToCart")}
                </button>
              </div>
            </div>
          </article>
        `).join('');
      }
    };

    categoryInputs.forEach(i => i.addEventListener("change", filterProducts));
    priceInputs.forEach(i => i.addEventListener("change", filterProducts));
    if (sortSelect) sortSelect.addEventListener("change", filterProducts);
    
    clearButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryInputs.forEach(i => i.checked = false);
        priceInputs.forEach(i => { if(i.value === "all") i.checked = true; });
        if (sortSelect) sortSelect.value = "featured";
        filterProducts();
      });
    });

    filterProducts();
  };

  // ==========================================
  // PRODUCT DETAIL PAGE (MERGED)
  // ==========================================
  const initProductDetailPage = () => {
    if (!document.querySelector("[data-product-detail-page]")) return;

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = parseInt(urlParams.get("id")) || 1;
      const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

      // Safe DOM updates with checks
      const safeUpdate = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };

      const safeUpdateSrc = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.src = value;
      };

      // Update basic info
      safeUpdate("breadcrumb-product", product.title);
      const catLink = document.getElementById("breadcrumb-category");
      if (catLink) {
        catLink.textContent = product.category;
        catLink.href = `./shop.html?category=${product.category}`;
      }
      
      safeUpdate("product-brand", product.brand);
      safeUpdate("product-sku", product.sku);
      safeUpdate("product-title", product.title);
      safeUpdate("rating-score", product.rating);
      safeUpdate("rating-count", `(${product.reviews} reviews)`);
      safeUpdate("reviews-count", product.reviews);
      safeUpdate("big-rating", product.rating);
      safeUpdate("current-price", `$${product.price}`);
      
      // Update old price and discount
      const oldPriceEl = document.getElementById("old-price");
      const discountEl = document.getElementById("discount-badge");
      
      if (product.oldPrice && oldPriceEl && discountEl) {
        oldPriceEl.textContent = `$${product.oldPrice}`;
        oldPriceEl.style.display = "inline";
        const discount = Math.round((1 - product.price / product.oldPrice) * 100);
        discountEl.textContent = `-${discount}%`;
        discountEl.style.display = "inline";
      } else {
        if (oldPriceEl) oldPriceEl.style.display = "none";
        if (discountEl) discountEl.style.display = "none";
      }
      
      safeUpdate("sticky-price", `$${product.price}`);
      safeUpdate("short-description", product.description);
      safeUpdate("full-description", product.description);
      
      // Update images
      safeUpdateSrc("main-image", product.image);
      safeUpdateSrc("desc-image", product.images[1] || product.image);

      // Features list
      const featuresList = document.getElementById("features-list");
      if (featuresList && product.features) {
        featuresList.innerHTML = product.features.map(f => 
          `<li><i class="fas fa-check"></i> ${f}</li>`
        ).join('');
      }

      // Specs table
      const specsTable = document.getElementById("specs-table");
      if (specsTable && product.specs) {
        specsTable.innerHTML = Object.entries(product.specs).map(([key, val]) => `
          <tr>
            <th>${key}</th>
            <td>${val}</td>
          </tr>
        `).join('');
      }

      // Gallery thumbnails
      const thumbsContainer = document.getElementById("gallery-thumbs");
      if (thumbsContainer && product.images) {
        thumbsContainer.innerHTML = product.images.map((img, idx) => `
          <div class="thumb-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
            <img src="${img}" alt="View ${idx + 1}" loading="lazy" onerror="this.style.display='none'">
          </div>
        `).join('');
        
        thumbsContainer.querySelectorAll(".thumb-item").forEach(thumb => {
          thumb.addEventListener("click", () => {
            const idx = thumb.dataset.index;
            const mainImg = document.getElementById("main-image");
            if (mainImg) mainImg.src = product.images[idx];
            thumbsContainer.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
          });
        });
      }

      // Variants (Colors & Sizes)
      const variantsContainer = document.getElementById("product-variants");
      if (variantsContainer && product.colors && product.sizes) {
        variantsContainer.innerHTML = `
          <div class="variant-group">
            <label data-i18n="product.color">Color</label>
            <div class="color-options">
              ${product.colors.map((c, i) => `
                <button class="color-btn ${i === 0 ? 'active' : ''}" style="background: ${c.hex};" title="${c.name}">
                  <span class="check"><i class="fas fa-check"></i></span>
                </button>
              `).join('')}
            </div>
          </div>
          <div class="variant-group">
            <label data-i18n="product.size">Size</label>
            <div class="size-options">
              ${product.sizes.map((s, i) => `
                <button class="size-btn ${i === 0 ? 'active' : ''}">${s}</button>
              `).join('')}
            </div>
          </div>
        `;
        
        variantsContainer.querySelectorAll(".color-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            variantsContainer.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
          });
        });
        
        variantsContainer.querySelectorAll(".size-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            variantsContainer.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
          });
        });
      }

      // Quantity controls
      const qtyInput = document.getElementById("product-quantity");
      const decreaseBtn = document.querySelector("[data-action='decrease']");
      const increaseBtn = document.querySelector("[data-action='increase']");

      if (qtyInput && decreaseBtn && increaseBtn) {
        decreaseBtn.addEventListener("click", () => {
          const val = parseInt(qtyInput.value);
          if (val > 1) qtyInput.value = val - 1;
        });
        
        increaseBtn.addEventListener("click", () => {
          const val = parseInt(qtyInput.value);
          if (val < 99) qtyInput.value = val + 1;
        });
      }

      // Add to cart buttons
      const handleAdd = () => {
        const qty = qtyInput ? parseInt(qtyInput.value) : 1;
        addToCart(product.id, qty);
      };

      const addToCartBtn = document.getElementById("add-to-cart-btn");
      const stickyAddBtn = document.getElementById("sticky-add-btn");
      const buyNowBtn = document.getElementById("buy-now-btn");

      if (addToCartBtn) addToCartBtn.addEventListener("click", handleAdd);
      if (stickyAddBtn) stickyAddBtn.addEventListener("click", handleAdd);
      
      if (buyNowBtn) {
        buyNowBtn.addEventListener("click", () => {
          handleAdd();
          setTimeout(() => window.location.href = "./checkout.html", 400);
        });
      }

      // Wishlist button
      const wishlistBtn = document.querySelector(".btn--wishlist");
      if (wishlistBtn) {
        wishlistBtn.addEventListener("click", function() {
          this.classList.toggle("active");
          const icon = this.querySelector("i");
          if (icon) {
            if (this.classList.contains("active")) {
              icon.classList.remove("far");
              icon.classList.add("fas");
            } else {
              icon.classList.remove("fas");
              icon.classList.add("far");
            }
          }
        });
      }

      // Tabs
      const tabBtns = document.querySelectorAll(".tab-btn");
      const tabPanels = document.querySelectorAll(".tab-panel");

      tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const tabId = btn.dataset.tab;
          tabBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          tabPanels.forEach(p => {
            p.classList.toggle("active", p.id === `tab-${tabId}`);
          });
        });
      });

      // Sticky cart on scroll
      const stickyCart = document.getElementById("sticky-add-cart");
      if (stickyCart) {
        window.addEventListener("scroll", () => {
          const hero = document.querySelector(".product-hero");
          const heroBottom = hero?.getBoundingClientRect().bottom || 0;
          if (window.innerWidth < 1024 && heroBottom < 0) {
            stickyCart.classList.add("visible");
          } else {
            stickyCart.classList.remove("visible");
          }
        });
      }

     // Sample reviews - FIXED with Font Awesome icons
const reviewsList = document.getElementById("reviews-list");
if (reviewsList) {
  const sampleReviews = [
    { author: "Sarah J.", rating: 5, text: "Absolutely love this! Great quality and fast shipping.", date: "2 days ago" },
    { author: "Mike C.", rating: 4, text: "Very good product, exactly as described.", date: "1 week ago" },
    { author: "Emma W.", rating: 5, text: "Perfect! Exceeded my expectations.", date: "2 weeks ago" }
  ];
  
  reviewsList.innerHTML = sampleReviews.map(r => `
    <div class="review-item">
      <div class="review-header">
        <span class="review-author">${r.author}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-rating">
        ${Array(5).fill(0).map((_, i) => 
          `<i class="${i < r.rating ? 'fas' : 'far'} fa-star"></i>`
        ).join('')}
      </div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join('');
}
      // Rating bars
      const ratingBars = document.getElementById("rating-bars");
      if (ratingBars) {
        const distribution = [85, 10, 3, 1, 1];
        ratingBars.innerHTML = [5,4,3,2,1].map((star, i) => `
          <div class="bar-item">
            <span>${star}</span>
            <i class="fas fa-star"></i>
            <div class="progress"><div style="width: ${distribution[i]}%"></div></div>
            <span>${distribution[i]}%</span>
          </div>
        `).join('');
      }

      // Related products
      const relatedGrid = document.getElementById("related-products-grid");
      if (relatedGrid) {
        const related = PRODUCTS
          .filter(p => p.category === product.category && p.id !== product.id)
          .slice(0, 4);
          
        relatedGrid.innerHTML = related.map(p => `
          <article class="card product-card">
            <div class="product-card__media">
              <a href="./product-detail.html?id=${p.id}">
                <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
              </a>
            </div>
            <div class="product-card__body">
              <h3 class="product-card__title">
                <a href="./product-detail.html?id=${p.id}">${p.title}</a>
              </h3>
              <div class="product-card__footer">
                <strong>$${p.price}</strong>
                <button class="btn btn--secondary btn--sm" onclick="event.stopPropagation(); window.addToCart(${p.id})">
                  Add
                </button>
              </div>
            </div>
          </article>
        `).join('');
      }

    } catch (error) {
      console.error("Error in product detail page:", error);
    }
  };

  // ==========================================
  // CART PAGE (IMPROVED - INSTANT UPDATE)
  // ==========================================
  const renderCartPage = () => {
    if (!document.querySelector("[data-cart-page]")) return;

    const cart = getCart();
    const itemsWithProducts = cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return product ? { ...item, product } : null;
    }).filter(Boolean);

    const cartItemsContainer = document.querySelector("[data-cart-items]");
    const cartSummaryContainer = document.querySelector("[data-cart-summary]");
    const emptyState = document.querySelector("[data-cart-empty]");

    if (itemsWithProducts.length === 0) {
      if (cartItemsContainer) cartItemsContainer.innerHTML = "";
      if (cartSummaryContainer) cartSummaryContainer.innerHTML = "";
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;

    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = itemsWithProducts.map(item => `
        <div class="card cart-item" data-cart-item="${item.product.id}">
          <img class="cart-item__image" src="${item.product.image}" alt="${item.product.title}" onerror="this.src='https://via.placeholder.com/100?text=No+Image'">
          <div class="cart-item__details">
            <div class="cart-item__title">${item.product.title}</div>
            <div class="cart-item__price">$${item.product.price} each</div>
          </div>
          <div class="cart-item__controls">
            <div class="qty-control">
              <button class="qty-btn" onclick="window.updateCartQty(${item.product.id}, ${item.quantity - 1})">-</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" onclick="window.updateCartQty(${item.product.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="cart-item__remove" onclick="window.removeFromCart(${item.product.id})">
              ${t("cart.remove")}
            </button>
          </div>
        </div>
      `).join('');
    }

    const subtotal = itemsWithProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    if (cartSummaryContainer) {
      cartSummaryContainer.innerHTML = `
        <h3>${t("cart.title")}</h3>
        <div class="summary-row">
          <span>${t("cart.subtotal")}</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
          <span>${t("cart.shipping")}</span>
          <span>${shipping === 0 ? t("cart.free") : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div class="summary-row summary-row--total">
          <span>${t("cart.total")}</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <a href="./checkout.html" class="btn btn--primary btn--full" style="margin-top: var(--space-4);">
          ${t("cart.checkout")}
        </a>
      `;
    }
  };

  // ==========================================
  // CHECKOUT PAGE
  // ==========================================
  const initCheckoutPage = () => {
    if (!document.querySelector("[data-checkout-page]")) return;

    const cart = getCart();
    const itemsWithProducts = cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return product ? { ...item, product } : null;
    }).filter(Boolean);

    if (itemsWithProducts.length === 0) {
      window.location.href = "./cart.html";
      return;
    }

    const subtotal = itemsWithProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    const summaryEl = document.querySelector("[data-checkout-summary]");
    if (summaryEl) {
      summaryEl.innerHTML = `
        <h3>${t("cart.title")}</h3>
        <div class="summary-row"><span>${t("cart.subtotal")}</span><span>$${subtotal.toFixed(2)}</span></div>
        <div class="summary-row"><span>${t("cart.shipping")}</span><span>${shipping === 0 ? t("cart.free") : `$${shipping.toFixed(2)}`}</span></div>
        <div class="summary-row summary-row--total"><span>${t("cart.total")}</span><span>$${total.toFixed(2)}</span></div>
      `;
    }

    const form = document.querySelector("[data-checkout-form]");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        setCart([]);
        showToast(t("toast.order"));
        setTimeout(() => window.location.href = "./index.html", 1500);
      });
    }
  };

  // ==========================================
  // AUTH PAGES
  // ==========================================
  const initAuthPages = () => {
    const loginForm = document.querySelector("[data-login-form]");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Login successful!");
        setTimeout(() => window.location.href = "./index.html", 500);
      });
    }

    const signupForm = document.querySelector("[data-signup-form]");
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const password = document.getElementById("signup-password")?.value;
        const confirm = document.getElementById("signup-confirm")?.value;
        
        if (password !== confirm) {
          const feedback = document.querySelector("[data-signup-feedback]");
          if (feedback) {
            feedback.textContent = "Passwords do not match";
            feedback.className = "form-feedback is-error";
          }
          return;
        }
        
        showToast(t("signup.success") || "Account created!");
        setTimeout(() => window.location.href = "./login.html", 500);
      });
    }
  };

  // ==========================================
  // INITIALIZATION
  // ==========================================
  const init = () => {
    initTheme();
    initLanguage();
    initNavigation();
    initNewsletter();
    initFeaturedProducts();
    initShopPage();
    initProductDetailPage();
    renderCartPage();
    initCheckoutPage();
    initAuthPages();
    updateCartUI();

    // Listen for cart updates to refresh cart page instantly
    window.addEventListener("cart-updated", renderCartPage);

    // Expose functions globally
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.updateCartQty = updateQuantity;
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();