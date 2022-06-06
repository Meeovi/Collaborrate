"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerWhereInput_1 = require("../../../inputs/CustomerWhereInput");
let DeleteManyCustomerArgs = class DeleteManyCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], DeleteManyCustomerArgs.prototype, "where", void 0);
DeleteManyCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCustomerArgs);
exports.DeleteManyCustomerArgs = DeleteManyCustomerArgs;
