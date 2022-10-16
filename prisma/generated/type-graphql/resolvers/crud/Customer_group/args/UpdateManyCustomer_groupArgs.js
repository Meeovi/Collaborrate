"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupUpdateManyMutationInput_1 = require("../../../inputs/Customer_groupUpdateManyMutationInput");
const Customer_groupWhereInput_1 = require("../../../inputs/Customer_groupWhereInput");
let UpdateManyCustomer_groupArgs = class UpdateManyCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateManyMutationInput_1.Customer_groupUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateManyMutationInput_1.Customer_groupUpdateManyMutationInput)
], UpdateManyCustomer_groupArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], UpdateManyCustomer_groupArgs.prototype, "where", void 0);
UpdateManyCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCustomer_groupArgs);
exports.UpdateManyCustomer_groupArgs = UpdateManyCustomer_groupArgs;
