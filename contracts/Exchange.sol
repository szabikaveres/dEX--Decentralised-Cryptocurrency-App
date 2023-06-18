//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Token.sol";

contract Exchange {
    address public feeAccount;
    uint256 public feePercent;
    mapping(address => mapping(address => uint256)) public tokens;
    mapping(uint256 => _Order);


    event Deposit(address token, address user, uint256 amount, uint256 balance);
    event Withdraw(
        address token,
        address user,
        uint256 amount,
        uint256 balance
    );

    //A way to model the order
    struct _Order{
        //Attributes of an order
        uint256 id; //Unique identifier for order
        address user; //User who made order
        address tokenGet; //Address of the token they receive
        uint256 amountGet; // Amount they receive 
        address tokenGive; //Address of the token they give
        uint256 amountGive;  //Amount they give
        uint256 timeStamp; //When order was created
    }

    constructor(address _feeAccount, uint256 _feePercent) {
        feeAccount = _feeAccount;
        feePercent = _feePercent;
    }


    // ------------------------
    // DEPOSIT & WITHDRAW TOKEN

    function depositToken(address _token, uint256 _amount) public {
        // Transfer tokens to exchange
        require(Token(_token).transferFrom(msg.sender, address(this), _amount));

        // Update user balance
        tokens[_token][msg.sender] = tokens[_token][msg.sender] + _amount;

        // Emit an event
        emit Deposit(_token, msg.sender, _amount, tokens[_token][msg.sender]);
    }

    function withdrawToken(address _token, uint256 _amount) public {
        // Ensure user has enough tokens to withdraw
        require(tokens[_token][msg.sender] >= _amount);

        // Transfer tokens to user
        Token(_token).transfer(msg.sender, _amount);

        // Update user balance
        tokens[_token][msg.sender] = tokens[_token][msg.sender] - _amount;

        // Emit event
        emit Withdraw(_token, msg.sender, _amount, tokens[_token][msg.sender]);
    }

    function balanceOf(address _token, address _user)
        public
        view
        returns (uint256)
    {
        return tokens[_token][_user];
    }

    //MAKE AND CANCEL ORDER

    function makeOrder(
        address _tokenGet,
        uint256 _amountGet, 
        address _tokenGive, 
        address _amountGive) public {
            //Token Give(the token they want to spend)- which token and how much?
    //Token Get(token they want to receive)- which token and how much?
         _Order(
            1, //id
            msg.sender, //user
            _tokenGet, //token Get
            -amountGet, //amount Get
            _amountGive, //amountGive
            _tokenGive, //tokenGive
            //timestamp
            
            
            
            
             )


    }

}
