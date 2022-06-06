"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupUpdateManyWithWhereWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupScalarWhereInput_1 = require("../inputs/Customer_groupScalarWhereInput");
const Customer_groupUpdateManyMutationInput_1 = require("../inputs/Customer_groupUpdateManyMutationInput");
let Customer_groupUpdateManyWithWhereWithoutCustomersInput = class Customer_groupUpdateManyWithWhereWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupScalarWhereInput_1.Customer_groupScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupScalarWhereInput_1.Customer_groupScalarWhereInput)
], Customer_groupUpdateManyWithWhereWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateManyMutationInput_1.Customer_groupUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateManyMutationInput_1.Customer_groupUpdateManyMutationInput)
], Customer_groupUpdateManyWithWhereWithoutCustomersInput.prototype, "data", void 0);
Customer_groupUpdateManyWithWhereWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupUpdateManyWithWhereWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_groupUpdateManyWithWhereWithoutCustomersInput);
exports.Customer_groupUpdateManyWithWhereWithoutCustomersInput = Customer_groupUpdateManyWithWhereWithoutCustomersInput;
