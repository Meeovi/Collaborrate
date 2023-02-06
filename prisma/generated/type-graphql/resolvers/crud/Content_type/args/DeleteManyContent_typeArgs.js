"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeWhereInput_1 = require("../../../inputs/Content_typeWhereInput");
let DeleteManyContent_typeArgs = class DeleteManyContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeWhereInput_1.Content_typeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeWhereInput_1.Content_typeWhereInput)
], DeleteManyContent_typeArgs.prototype, "where", void 0);
DeleteManyContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyContent_typeArgs);
exports.DeleteManyContent_typeArgs = DeleteManyContent_typeArgs;
