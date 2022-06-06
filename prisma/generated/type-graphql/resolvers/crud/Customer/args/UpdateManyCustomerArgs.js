"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerUpdateManyMutationInput_1 = require("../../../inputs/CustomerUpdateManyMutationInput");
const CustomerWhereInput_1 = require("../../../inputs/CustomerWhereInput");
let UpdateManyCustomerArgs = class UpdateManyCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateManyMutationInput_1.CustomerUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerUpdateManyMutationInput_1.CustomerUpdateManyMutationInput)
], UpdateManyCustomerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], UpdateManyCustomerArgs.prototype, "where", void 0);
UpdateManyCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCustomerArgs);
exports.UpdateManyCustomerArgs = UpdateManyCustomerArgs;
