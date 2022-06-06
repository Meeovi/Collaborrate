"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateInput_1 = require("../../../inputs/Customer_groupCreateInput");
let CreateCustomer_groupArgs = class CreateCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateInput_1.Customer_groupCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateInput_1.Customer_groupCreateInput)
], CreateCustomer_groupArgs.prototype, "data", void 0);
CreateCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCustomer_groupArgs);
exports.CreateCustomer_groupArgs = CreateCustomer_groupArgs;
