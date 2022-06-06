"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupUpdateInput_1 = require("../../../inputs/Customer_groupUpdateInput");
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
let UpdateCustomer_groupArgs = class UpdateCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateInput_1.Customer_groupUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateInput_1.Customer_groupUpdateInput)
], UpdateCustomer_groupArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], UpdateCustomer_groupArgs.prototype, "where", void 0);
UpdateCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCustomer_groupArgs);
exports.UpdateCustomer_groupArgs = UpdateCustomer_groupArgs;
