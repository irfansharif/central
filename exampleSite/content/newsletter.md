+++
description = "Newsletter"
+++

Curabitur molestie, dolor scelerisque volutpat efficitur, risus mauris feugiat
mauris, id gravida libero nunc vitae lorem. Etiam sollicitudin convallis nibh,
nec ultricies metus aliquet nec. Aliquam erat volutpat.

<div class="newsletter">
  <script type="text/javascript">var submitted=false;</script>
  <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {
    window.location.href='#';
  }"></iframe>
  <form class="form" action="https://docs.google.com/forms/d/e/XYZ/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;">
    <input class="newsletter-email-input" name="emailAddress" type="email" placeholder="Email Address"
    multiple maxlength=256 required/>
    <button class="newsletter-submit-button" type="submit">Subscribe</button>
</form>
</div>
