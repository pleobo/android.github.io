
      // Code JavaScript cho Parallax (giữ nguyên)
      const parallaxBg = document.querySelector(".parallax-background");
      const sensitivity = 30;

      document.addEventListener("mousemove", (e) => {
        const centerX = window.innerWidth / 2.5;
        const centerY = window.innerHeight / 2.5;
        const offsetX = (e.clientX - centerX) / centerX;
        const offsetY = (e.clientY - centerY) / centerY;
        const moveX = -(offsetX * sensitivity);
        const moveY = -(offsetY * sensitivity);

        parallaxBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      // *** Code JavaScript cho Modal/Popup (Cập nhật) ***

      // Lấy các phần tử cần thiết
      const modal = document.getElementById("loginModal");
      const btnGetStarted = document.getElementById("btn-get-started");
      const btnLearnMore = document.getElementById("btn-learn-more");
      const closeBtn = document.querySelector(".close-btn");

      // Đã thay đổi cách lấy nút và loader theo ID
      const btnSignIn = document.querySelector(".button-submit"); // hoặc dùng ID: document.getElementById('btn-sign-in')
      const loaderSpinner = document.getElementById("loader-spinner"); // Loader đã thêm ID

      // Hàm mở modal
      const openModal = (e) => {
        e.preventDefault();
        loaderSpinner.style.display = "none";
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      };

      // Hàm đóng modal
      const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      };

      // Gán sự kiện cho các nút mở modal
      btnGetStarted.addEventListener("click", openModal);
      btnLearnMore.addEventListener("click", openModal);

      // Gán sự kiện cho nút đóng modal (dấu X)
      closeBtn.addEventListener("click", closeModal);

      // *** Logic xử lý Loader khi nhấn nút Đăng nhập ***
      btnSignIn.addEventListener("click", (e) => {
        e.preventDefault();

        // 1. Hiển thị Loader và Vô hiệu hóa Nút
        btnSignIn.disabled = true; // Vô hiệu hóa nút
        btnSignIn.textContent = "Processing..."; // Thay đổi text nút
        loaderSpinner.style.display = "flex"; // Hiển thị loader (dùng flex để căn giữa)

        // 2. Mô phỏng quá trình xử lý (2000ms = 2 giây)
        setTimeout(() => {
          // 3. Ẩn Loader và Kích hoạt lại Nút
          loaderSpinner.style.display = "none"; // Ẩn loader
          btnSignIn.disabled = false; // Kích hoạt lại nút
          btnSignIn.textContent = "Sign In"; // Khôi phục text nút
          window.location.
          // 4. Thực hiện hành động tiếp theo (ví dụ: đóng modal)
          closeModal();
          // window.location.href = "https://google.com";
          // Bạn có thể thêm logic thông báo đăng nhập thành công/thất bại tại đây
        }, 6000); // Thời gian giả lập xử lý
      });
      // *** Hết Logic xử lý Loader ***

      // Đóng modal khi click ra ngoài vùng modal-content
      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });

      // Đóng modal khi nhấn phím ESC
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
          
          closeModal();
          
        }
      });