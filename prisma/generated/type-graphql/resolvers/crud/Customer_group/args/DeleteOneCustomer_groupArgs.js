"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
let DeleteOneCustomer_groupArgs = class DeleteOneCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], DeleteOneCustomer_groupArgs.prototype, "where", void 0);
DeleteOneCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCustomer_groupArgs);
exports.DeleteOneCustomer_groupArgs = DeleteOneCustomer_groupArgs;
