"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateInput_1 = require("../../../inputs/Customer_groupCreateInput");
let CreateOneCustomer_groupArgs = class CreateOneCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateInput_1.Customer_groupCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateInput_1.Customer_groupCreateInput)
], CreateOneCustomer_groupArgs.prototype, "data", void 0);
CreateOneCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCustomer_groupArgs);
exports.CreateOneCustomer_groupArgs = CreateOneCustomer_groupArgs;
