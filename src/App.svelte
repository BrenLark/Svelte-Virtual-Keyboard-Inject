<script>
    // @ts-ignore
    import Keyboard from "svelte-keyboard";
    let target;

    let allInputs = document.querySelectorAll("input[type='text'],input[type='password']")
    for(let input of allInputs) {
      input.addEventListener("focus",(e)=>{
        target = input;
        document.body.classList.add("virtualKeyboardOpen")
      })
      input.addEventListener("focusout",(e)=>{
        target = undefined;
        document.body.classList.remove("virtualKeyboardOpen")
      })
    }
    function onKeydown(e) {
      if(target) target.focus();
      let length = target.value.length
      switch(e.detail) {
        case "Backspace":
          target.value = target.value.slice(0, -1)
        break;
        case "Space":
          target.value = target.value + " "
        break;
        case "Enter":
        break;
        default:
          target.value = target.value + e.detail
      }
    }
</script>

<div class="keyboard">
  <Keyboard on:keydown="{onKeydown}"/>
</div>

<style>
  .keyboard {
    background-color: #fff;
  }
</style>