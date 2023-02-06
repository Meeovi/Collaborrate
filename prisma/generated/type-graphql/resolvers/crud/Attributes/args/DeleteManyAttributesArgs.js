"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesWhereInput_1 = require("../../../inputs/AttributesWhereInput");
let DeleteManyAttributesArgs = class DeleteManyAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereInput_1.AttributesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesWhereInput_1.AttributesWhereInput)
], DeleteManyAttributesArgs.prototype, "where", void 0);
DeleteManyAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAttributesArgs);
exports.DeleteManyAttributesArgs = DeleteManyAttributesArgs;
