
import './App.css';
import financeImage from './images/finance.png';
import nec from './images/nec.png';
import { useNavigate } from 'react-router-dom';

function App() {
  const  navigate = useNavigate();
  const navi=(no)=>{
switch(no){
  case 1:
    navigate('/UserForm')
    break
  case 2:
    navigate('/Mortage')
    break;
  case 4:
   
    

}
  
  }
  const handleSubmenuToggle = (event) => {
    event.preventDefault();
    const submenu = event.currentTarget.nextElementSibling;
    submenu.classList.toggle('show');
  };
  return (
    <>
<div class="app-container">
        <header class="header">
            <a href="#" class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                </svg>
                <span class="spa">Nec Finance</span>
            </a>
            <nav class="nav">
                <a href="#" >Features</a>
                <a href="#">Pricing</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
        <main>
            <section class="hero">
                <div class="hero-content">
                    <h1>Take Control of Your Finances</h1>
                    <p>Our AI-powered personal finance platform helps you budget, invest, and plan for a brighter financial future.</p>
                    <div class="cta-buttons">
                        <a href="#" class="btn-primary" onClick={()=>navi(1)}>Get Started</a>
                        <a href="#" class="btn-secondary">Learn More</a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src={financeImage} alt="Hero"/>
                </div>

            </section>
            <br/>
            <div class="feature-tag">Key Features</div>
            <section class="">
            <div class="feature-header">
            <h2 style={{textAlign:'center'}}>Manage Your Finances with Ease</h2>
            <br/>
            <p style={{color:"black",textAlign:"center"}}>Our platform offers a suite of tools to help you take control of your financial life, from budgeting and investment tracking to personalized insights and recommendations.</p>
        </div>
    <div class="features-content" >
        
        <div class="features-list" >
            <div class="feature-item">
                <div class="feature-card">
                    <h3>Budgeting Made Easy</h3>
                    <p>Effortlessly track your income and expenses, set budgets, and receive personalized recommendations to help you achieve your financial goals.</p>
                </div>
            </div>
            <div class="feature-item">
                <div class="feature-card">
                    <h3>Investment Tracking</h3>
                    <p>Monitor your investment portfolio, receive performance insights, and get personalized recommendations to optimize your investments.</p>
                </div>
            </div>
            <div class="feature-item">
                <div class="feature-card">
                    <h3>Personalized Insights</h3>
                    <p>Our AI-powered platform analyzes your financial data to provide you with personalized insights and recommendations, helping you make informed decisions.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="features-image">
        <img src="/placeholder.svg" alt="Features"/>
    </div>
</section>

            <section class="cta">
                <div class="cta-content">
                    <h2>Achieve Your Financial Goals</h2>
                    <p style={{color:"black"}}>Our platform provides the tools and insights you need to budget, invest, and plan for a brighter financial future.</p>
                    <div class="cta-buttons">
                        <a href="#" class="btn-primary">Get Started</a>
                        <a href="#" class="btn-secondary">Learn More</a>
                    </div>
                </div>
            </section>
            <section class="testimonials">
                <div class="testimonials-content">
                    <div class="testimonial-header">
                        <div class="testimonial-tag">Testimonials</div>
                        <h2>What Our Customers Say</h2>
                        <p>Hear from real people who have transformed their financial lives with our platform.</p>
                    </div>
                    <div class="testimonials-list">
                        <div class="testimonial-item">
                            <div class="testimonial-avatar">
                                <img src="/placeholder-user.jpg" alt="John Doe"/>
                            </div>
                            <div class="testimonial-text">
                                <div class="testimonial-author">John Doe</div>
                                <p>"This app has been a game-changer for my finances. The budgeting tools and personalized insights have helped me save more and invest wisely."</p>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-avatar">
                                <img src="./placeholder-user.jpg" alt="Jane Appleseed"/>
                            </div>
                            <div class="testimonial-text">
                                <div class="testimonial-author">Jane Appleseed</div>
                                <p>"I was struggling to keep track of my investments, but this app made it so easy. The insights have helped me optimize my portfolio and reach my financial goals."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Our Team</a>
                    <a href="#">Careers</a>
                    <a href="#">News</a>
                </div>
                <div class="footer-column">
                    <h3>Products</h3>
                    <a href="#">Budgeting</a>
                    <a href="#">Investments</a>
                    <a href="#">Insights</a>
                    <a href="#">Goals</a>
                </div>
                <div class="footer-column">
                    <h3>Resources</h3>
                    <a href="#">Blog</a>
                    <a href="#">Community</a>
                    <a href="#">Support</a>
                    <a href="#">FAQs</a>
                </div>
                <div class="footer-column">
                    <h3>Legal</h3>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
                <div class="footer-column">
                    <h3>Contact</h3>
                    <a href="#">Support</a>
                    <a href="#">Sales</a>
                    <a href="#">Press</a>
                    <a href="#">Partnerships</a>
                </div>
            </div>
        </footer>
    </div>
    </>
  );
}

export default App;
