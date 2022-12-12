"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsWhereUniqueInput_1 = require("../../../inputs/VendorsWhereUniqueInput");
let DeleteOneVendorsArgs = class DeleteOneVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereUniqueInput_1.VendorsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsWhereUniqueInput_1.VendorsWhereUniqueInput)
], DeleteOneVendorsArgs.prototype, "where", void 0);
DeleteOneVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneVendorsArgs);
exports.DeleteOneVendorsArgs = DeleteOneVendorsArgs;
