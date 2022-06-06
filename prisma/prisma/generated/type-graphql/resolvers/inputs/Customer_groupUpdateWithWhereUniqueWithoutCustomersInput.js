"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupUpdateWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupUpdateWithoutCustomersInput_1 = require("../inputs/Customer_groupUpdateWithoutCustomersInput");
const Customer_groupWhereUniqueInput_1 = require("../inputs/Customer_groupWhereUniqueInput");
let Customer_groupUpdateWithWhereUniqueWithoutCustomersInput = class Customer_groupUpdateWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], Customer_groupUpdateWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateWithoutCustomersInput_1.Customer_groupUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateWithoutCustomersInput_1.Customer_groupUpdateWithoutCustomersInput)
], Customer_groupUpdateWithWhereUniqueWithoutCustomersInput.prototype, "data", void 0);
Customer_groupUpdateWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupUpdateWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_groupUpdateWithWhereUniqueWithoutCustomersInput);
exports.Customer_groupUpdateWithWhereUniqueWithoutCustomersInput = Customer_groupUpdateWithWhereUniqueWithoutCustomersInput;
