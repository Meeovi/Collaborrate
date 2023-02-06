"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsWhereInput_1 = require("../../../inputs/VendorsWhereInput");
let DeleteManyVendorsArgs = class DeleteManyVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereInput_1.VendorsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsWhereInput_1.VendorsWhereInput)
], DeleteManyVendorsArgs.prototype, "where", void 0);
DeleteManyVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVendorsArgs);
exports.DeleteManyVendorsArgs = DeleteManyVendorsArgs;
