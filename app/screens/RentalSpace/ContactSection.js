"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

// Utility function for className merging
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Card Components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// Input Component
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Textarea Component
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

// Select Component
const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <select
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = "Select";

// Button Component
const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Toggle Switch Component
const ToggleSwitch = ({ isRTL, onToggle }) => {
  return (
    <div className={`flex items-center gap-2 absolute top-4 md:top-6 z-50 ${
      isRTL ? "left-4 md:left-auto md:right-6" : "right-4 md:right-6"
    }`}>
      <span
        className={`text-xs sm:text-sm font-medium ${
          isRTL ? "text-[#032174]" : "text-gray-600"
        }`}
      >
        {isRTL ? "عربي" : "EN"}
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isRTL}
          onChange={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        />
        <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-[#032174]"></div>
      </label>
    </div>
  );
};

const ContactSection = () => {
  const [isRTL, setIsRTL] = useState(false);
  const [formType, setFormType] = useState(""); // "rent" or "list"
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    propertyType: "",
    propertyAddress: "",
    price: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleRTL = () => {
    setIsRTL((prev) => !prev);
  };

  // Content based on language
  const content = {
    en: {
      title: "Get in touch",
      arabicTitle: "تواصل معنا",
      heading: "Schedule a Viewing!",
      description: "Have Questions About This Property? We're Here to Help.",
      formTypeLabel: "What would you like to do?",
      formTypeOptions: [
        { value: "rent", label: "I want to rent a property" },
        { value: "list", label: "I want to list my property on the website" }
      ],
      formFields: [
        { placeholder: "Last Name", type: "text" },
        { placeholder: "First Name", type: "text" },
        { placeholder: "Email", type: "email" },
        { placeholder: "Phone Number", type: "tel" },
      ],
      selectLabel: "Property Type",
      selectOptions: [
        "Select property type",
        "Apartment",
        "Villa",
        "Office",
        "Commercial",
      ],
      propertyAddress: "Property Address",
      price: "Price",
      messagePlaceholder: "Message",
      captchaError: "⚠️ Please complete the reCAPTCHA verification",
      buttonText: "Contact Us",
    },
    ar: {
      title: "تواصل معنا",
      arabicTitle: "Get in touch",
      heading: "جدولة معاينة!",
      description: "هل لديك أسئلة حول هذه العقار؟ نحن هنا لمساعدتك.",
      formTypeLabel: "ماذا تريد أن تفعل؟",
      formTypeOptions: [
        { value: "rent", label: "أريد استئجار عقار" },
        { value: "list", label: "أريد إدراج عقاري على الموقع" }
      ],
      formFields: [
        { placeholder: "الاسم الأخير", type: "text" },
        { placeholder: "الاسم الأول", type: "text" },
        { placeholder: "البريد الإلكتروني", type: "email" },
        { placeholder: "رقم الهاتف", type: "tel" },
      ],
      selectLabel: "نوع العقار",
      selectOptions: ["اختر نوع العقار", "شقة", "فيلا", "مكتب", "تجاري"],
      propertyAddress: "عنوان العقار",
      price: "السعر",
      messagePlaceholder: "الرسالة",
      captchaError: "⚠️ يرجى إكمال التحقق من reCAPTCHA",
      buttonText: "اتصل بنا",
    },
  };

  const currentContent = isRTL ? content.ar : content.en;

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
    // Reset form data when changing form type
    setFormData({
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
      propertyType: "",
      propertyAddress: "",
      price: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form type selection
    if (!formType) {
      toast.error(isRTL ? "⚠️ يرجى اختيار نوع الخدمة" : "⚠️ Please select what you would like to do");
      return;
    }

    // Validate reCAPTCHA
    if (!captchaToken) {
      toast.error(currentContent.captchaError);
      return;
    }

    // Validation functions
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
      // Allows international format with +, numbers, spaces, hyphens, parentheses
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$|^[\+]?[(]?[\d\s\-()]{10,}$/;
      const digitsOnly = phone.replace(/\D/g, '');
      return phoneRegex.test(phone) && digitsOnly.length >= 10 && digitsOnly.length <= 15;
    };

    const validateMessage = (message) => {
      return message.trim().length >= 5;
    };

    const validateName = (name) => {
      return name.trim().length >= 2;
    };

    // Field-specific validation messages
    const validationMessages = {
      en: {
        firstNameRequired: "First name is required",
        firstNameMinLength: "First name must be at least 2 characters",
        lastNameRequired: "Last name is required", 
        lastNameMinLength: "Last name must be at least 2 characters",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Please enter a valid phone number (10-15 digits)",
        propertyTypeRequired: "Property type is required",
        propertyAddressRequired: "Property address is required",
        priceRequired: "Price is required",
        messageRequired: "Message is required",
        messageMinLength: "Message must be at least 5 characters long"
      },
      ar: {
        firstNameRequired: "الاسم الأول مطلوب",
        firstNameMinLength: "الاسم الأول يجب أن يكون على الأقل حرفين",
        lastNameRequired: "الاسم الأخير مطلوب",
        lastNameMinLength: "الاسم الأخير يجب أن يكون على الأقل حرفين", 
        emailRequired: "البريد الإلكتروني مطلوب",
        emailInvalid: "يرجى إدخال بريد إلكتروني صحيح",
        phoneRequired: "رقم الهاتف مطلوب",
        phoneInvalid: "يرجى إدخال رقم هاتف صحيح (10-15 رقم)",
        propertyTypeRequired: "نوع العقار مطلوب",
        propertyAddressRequired: "عنوان العقار مطلوب",
        priceRequired: "السعر مطلوب",
        messageRequired: "الرسالة مطلوبة",
        messageMinLength: "الرسالة يجب أن تكون على الأقل 5 أحرف"
      }
    };

    const messages = isRTL ? validationMessages.ar : validationMessages.en;

    // Validate all fields
    const { firstName, lastName, email, phone, propertyType, propertyAddress, price, message } = formData;

    // First Name validation
    if (!firstName.trim()) {
      toast.error(messages.firstNameRequired);
      return;
    }
    if (!validateName(firstName)) {
      toast.error(messages.firstNameMinLength);
      return;
    }

    // Last Name validation
    if (!lastName.trim()) {
      toast.error(messages.lastNameRequired);
      return;
    }
    if (!validateName(lastName)) {
      toast.error(messages.lastNameMinLength);
      return;
    }

    // Email validation
    if (!email.trim()) {
      toast.error(messages.emailRequired);
      return;
    }
    if (!validateEmail(email)) {
      toast.error(messages.emailInvalid);
      return;
    }

    // Phone validation
    if (!phone.trim()) {
      toast.error(messages.phoneRequired);
      return;
    }
    if (!validatePhone(phone)) {
      toast.error(messages.phoneInvalid);
      return;
    }

    // Property Type validation
    if (!propertyType.trim()) {
      toast.error(messages.propertyTypeRequired);
      return;
    }

    // Additional validation for "list my property" form
    if (formType === "list") {
      if (!propertyAddress.trim()) {
        toast.error(messages.propertyAddressRequired);
        return;
      }
      if (!price.trim()) {
        toast.error(messages.priceRequired);
        return;
      }
    }

    // Message validation
    if (!message.trim()) {
      toast.error(messages.messageRequired);
      return;
    }
    if (!validateMessage(message)) {
      toast.error(messages.messageMinLength);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...formData, 
          formType,
          captchaToken 
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success( (isRTL ? "تم إرسال البريد بنجاح!" : "Thank you! Email sent successfully!"));
        setFormData({
          lastName: "",
          firstName: "",
          email: "",
          phone: "",
          propertyType: "",
          propertyAddress: "",
          price: "",
          message: "",
        });
        setFormType("");
        setCaptchaToken(null);
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        toast.error("❌ " + (result.error || (isRTL ? "فشل إرسال البريد" : "Failed to send email")));
      }
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("❌ " + (isRTL ? "فشل الإرسال: " : "Failed to send: ") + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full mt-16 md:mt-[110px] relative min-h-screen bg-[#090c17]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full bg-[#090c17]">
        <img
          className="w-full h-full object-cover"
          alt="get in touch"
          src="/assets/get-in-touch-bg.png"
        />
        <div className="absolute inset-0 w-full h-full bg-[#ffffff99] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]" />
      </div>

      {/* Header Section */}
      <header className="relative z-10 pt-8 md:pt-16 lg:pt-[67px] flex flex-col items-center gap-2 md:gap-[7px] text-center px-4">
        <h1 className="font-['Poppins',Helvetica] font-normal text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight">
          <span className="font-extrabold text-black tracking-[0]">
            {isRTL ? currentContent.arabicTitle : currentContent.title}
          </span>
        </h1>

        <p className="opacity-70 font-['Poppins',Helvetica] font-medium text-[#032174] text-lg sm:text-xl md:text-2xl tracking-[-0.48px] leading-normal">
          {isRTL ? currentContent.title : currentContent.arabicTitle}
        </p>
      </header>

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-48 py-8 md:py-16">
        <Card className="w-full max-w-6xl bg-white backdrop-blur-[25px] rounded-lg md:rounded-[20px] border-2 border-[#090c170d] shadow-xl">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Toggle Switch - Dynamic positioning based on RTL */}
            <ToggleSwitch isRTL={isRTL} onToggle={toggleRTL} />
            
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-0">
              {/* Contact Form Section */}
              <div
                className={`w-full lg:flex-1 ${
                  isRTL ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {/* Heading */}
                  <div className={`flex flex-col gap-2 w-full ${
                    isRTL ? "text-right" : "text-left"
                  }`}>
                    <h2 className="font-bold text-[#444444] text-xl md:text-2xl lg:text-[24px]">
                      {currentContent.heading}
                    </h2>
                    <p className="opacity-80 font-['Inter',Helvetica] text-[#444444] text-sm md:text-base">
                      {currentContent.description}
                    </p>
                  </div>

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    {/* Form Type Selection - Radio Buttons */}
                    <div className="mb-4">
                      <label className={`block text-sm font-medium text-[#444444] mb-3 ${
                        isRTL ? "text-right" : "text-left"
                      }`}>
                        {currentContent.formTypeLabel}
                      </label>
                      <div className={`flex flex-col sm:flex-row sm:gap-6 gap-3 ${isRTL ? "text-right" : "text-left"}`}>
                        {currentContent.formTypeOptions.map((option) => (
                          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="formType"
                              value={option.value}
                              checked={formType === option.value}
                              onChange={handleFormTypeChange}
                              className="h-4 w-4 text-[#032174] focus:ring-[#032174] border-gray-300"
                            />
                            <span className="text-sm text-[#444444] whitespace-nowrap">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Name fields */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={currentContent.formFields[1].placeholder}
                        className="w-full bg-[#ffffff0d] border border-[#00000033] rounded-[5px] px-3 py-2 text-sm md:text-base"
                        required
                      />
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={currentContent.formFields[0].placeholder}
                        className="w-full bg-[#ffffff0d] border border-[#00000033] rounded-[5px] px-3 py-2 text-sm md:text-base"
                        required
                      />
                    </div>

                    {/* Email */}
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={currentContent.formFields[2].placeholder}
                      className="w-full bg-[#ffffff0d] border border-[#00000033] rounded-[5px] px-3 py-2 text-sm md:text-base"
                      required
                    />

                    {/* Phone */}
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={currentContent.formFields[3].placeholder}
                      className="w-full bg-[#ffffff0d] border border-[#00000033] rounded-[5px] px-3 py-2 text-sm md:text-base"
                      required
                    />

                    {/* Select */}
                    <div>
                      <label className={`block text-sm font-medium text-[#444444] mb-2 ${
                        isRTL ? "text-right" : "text-left"
                      }`}>
                        {currentContent.selectLabel}
                      </label>
                      <Select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff0d] border border-[#00000033] rounded-[5px] px-3 py-2 text-sm md:text-base"
                        required
                      >
                        {currentContent.selectOptions.map((option, idx) => (
                          <option key={idx} value={idx === 0 ? "" : option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </div>

                    {/* Additional fields for "List my property" */}
                    {formType === "list" && (
                      <>
                        {/* Property Address */}
                        <Input
                          name="propertyAddress"
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          placeholder={currentContent.propertyAddress}
                          className="w-full bg-[#ffffff0d] border border-[#00000033] rounded-[5px] px-3 py-2 text-sm md:text-base"
                          required
                        />

                        {/* Price */}
                        <Input
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder={currentContent.price}
                          className="w-full bg-[#ffffff0d] border border-[#00000033] rounded-[5px] px-3 py-2 text-sm md:text-base"
                          required
                        />
                      </>
                    )}

                    {/* Message */}
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={currentContent.messagePlaceholder}
                      className="w-full h-24 md:h-[111px] bg-[#ffffff0d] border border-[#00000033] rounded-[5px] px-3 py-3 text-sm md:text-base resize-none"
                      required
                    />

                    {/* reCAPTCHA */}
                    <div className="flex ">
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                        onExpired={handleCaptchaExpired}
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={loading || !captchaToken || !formType}
                      className="w-full py-3 bg-[#032174] hover:bg-[#032174]/90 rounded-full text-white font-medium text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (isRTL ? "جاري الإرسال..." : "Sending...") : currentContent.buttonText}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Image Section */}
              <div
                className={`w-full lg:flex-1 flex justify-center ${
                  isRTL ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="w-full max-w-[400px] lg:max-w-full lg:mt-10">
                  <img
                    className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-contain rounded-lg shadow-lg"
                    alt="get in touch"
                    src="/assets/contact.png"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;