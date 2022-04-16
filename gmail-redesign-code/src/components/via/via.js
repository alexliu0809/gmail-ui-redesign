import React from 'react'
import { useLocalContext } from '../../context/context'
import { Header, Sidebar, Compose, Main, ViewMail} from "..";
import { Popover, makeStyles } from '@material-ui/core'


import './styles.css'

// PaperProps: Size of the container
// Todo: format the content with div: via__popoverContainer

const Via = ({show=false, setShow, anchorEl=null, setanchorEl, mailState}) => {

    const handleClose = () => {
        setShow(false);
        setanchorEl(null);
    };

    return (
            <Popover className='via__popover'
            open={show}
            //anchorEl={anchorEl}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 200, left: 5000 }}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            PaperProps={{
                style: { width: '400px', height: '400px' },
            }}
            onClose={handleClose}
            >

                <div className='via__popoverContainer'>
                    <h1>Extra info next to sender's name</h1>
                    <div class="article-content-container">
                        <div class="cc">
                            <p>You may see extra information next to someone's name when they send you a message. For example, you could get an email from your bank, but the sender's email address is from a different site.</p>

                            <h2>I see extra info next to the sender's name</h2>
                            
                            <div class="zippy-container">
                                <a class="zippy">I see an email address next to the sender's name</a></div>

                            <div class="zippy-overflow">
                                <div class="zippy-content zippy-hidden"><p>You'll see the sender's email address next to their name if it's someone you haven't emailed&nbsp;in the past.</p>

<p>If you add this sender to your address book or reply to one of their emails, you won't see their email address next to their name on future messages.</p>
</div></div>

<div class="zippy-container"><a class="zippy">I see "via" and a website name next to the sender's name</a></div>

  <div class="zippy-overflow"><div class="zippy-content"><p>You'll see "via" and a website name next to the sender's name if:</p>

<ul>
  <li>The domain it was sent from doesn't match the domain in the "From:" address. For example, you got an email from john.smith@gmail.com, but it could've been sent through a social networking site and not Gmail.</li>
  <li>The email was sent to a Google Group from a domain that has a "p=reject or p=quarantine"&nbsp;<a href="https://www.dmarc.org/" target="_blank" rel="noopener">DMARC policy</a>.</li>
</ul>

<p>You can't remove the "via" next to someone's name. Gmail shows this information so you're aware of where your messages are coming from.</p>

<p>If an email was sent to a Google Group from a domain that has 'p=quarantine' or 'p=reject' policy as its <a href="https://dmarc.org/" rel="noopener" target="_blank">DMARC policy</a>&nbsp;you'll see&nbsp;"'Sender Name' via Group-Name" &lt;YourGroup@Yourdomain.com&gt; (the recipient's group) as the sender. This behavior is seen so the Groups delivery system does not trigger the sender's&nbsp;domain DMARC policy and is correctly delivered.&nbsp;</p>

<p>If you notice that an email was sent via a program you don't recognize, the message might be spam.</p>
</div></div>



                            <h2>Remove "via" information from emails not sent through Gmail</h2>

                            <div><p>Gmail checks whether the messages you send are <a href="https://support.google.com/mail/answer/180707">authenticated</a>.</p>

                            <ul>
                                <li>・If you send messages with a bulk mailing vendor or&nbsp;third party affiliates,&nbsp;<a href="https://support.google.com/mail/answer/81126">prevent your emails from being blocked by&nbsp;Gmail</a>.&nbsp;</li>
                                <li>・Publish an SPF record that includes the IPs of the vendor or affiliates which send your messages.</li>
                                <li>・Sign your messages with a DKIM signature that is associated with your domain.</li>
                                <li>・Make sure the domain in the "From:" address&nbsp;matches the domain you're using to authenticate your emails.</li>
                            </ul>
                        </div>
                    </div></div>
                </div>
            </Popover>
    )
}

export default Via
