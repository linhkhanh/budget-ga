let bankAccount = 1000;
const totalMoney = () => {
   const $allAmount = $('.amount');
   for(let i = 0; i < $allAmount.length; i++) {
       const amount = $allAmount.eq(i).html();
       bankAccount = bankAccount + +amount;
   }
   $('.money').html(`${bankAccount} $`);
   checkMoney();
}

const checkMoney = () => {
    if (bankAccount <= 0)  $('.money').css({background: 'red', color: 'white'}); 
    if (bankAccount >= 1000) $('.money').css({background: 'green', color: 'white'}) 
}

const addMoreTag = () => {
    $('.add-more-tag').on('click', () => {
        $('.tags').append('<input class="u-full-width" type="text" name="tags" placeholder="tags of item">');
        return false
    })
}

const defaultNegativeNumber = () => {
    $( ".amount" ).focus(() => {
        $('.amount').val(parseInt('-1'));
      });
}

const removeTag = () => {
    $('.remove-tag').on('click', () => {
        const $alltags = $('.tags').children();
        const lastTag = $alltags.length - 1;
        $alltags.eq(lastTag).remove();
        return false
    })
}
$(() => {
    totalMoney();
    addMoreTag();
    defaultNegativeNumber();
    removeTag();
})