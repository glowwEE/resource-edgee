import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                     <Link to='/' className='social-logo'>
                         resource edge
                     </Link>
                     <h2>Throw paperwork into the trash</h2>
                    </div>
                    <div class='social-icons'>
                        <Link class='social-icons-link facebook' to='/' target='_blank' aria-label='Facebook'>
                        <i class='fab fa-facebook-f' />
                        </Link>

                        <Link class='social-icons-link twitter' to='/' target='_blank' aria-label='Twitter'>
                        <i class='fab fa-twitter' />
                        </Link>

                        <Link class='social-icons-link linkedin' to='/' target='_blank' aria-label='Linkedin'>
                        <i class='fab fa-linkedin' />
                        </Link>

                        <Link class='social-icons-link instagram' to='/' target='_blank' aria-label='Instagram'>
                        <i class='fab fa-instagram' />
                        </Link>
                    </div>
                    <small class='website-rights'>Copyright © Genesys DevStudio . All rights reserved</small>
                </div>
            </section>
        </div>
    )
}

export default Footer
