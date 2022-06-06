"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeWhereInput_1 = require("../../../inputs/Core_storeWhereInput");
let DeleteManyCore_storeArgs = class DeleteManyCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereInput_1.Core_storeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeWhereInput_1.Core_storeWhereInput)
], DeleteManyCore_storeArgs.prototype, "where", void 0);
DeleteManyCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCore_storeArgs);
exports.DeleteManyCore_storeArgs = DeleteManyCore_storeArgs;
