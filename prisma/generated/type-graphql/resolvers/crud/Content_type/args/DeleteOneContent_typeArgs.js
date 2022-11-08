"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeWhereUniqueInput_1 = require("../../../inputs/Content_typeWhereUniqueInput");
let DeleteOneContent_typeArgs = class DeleteOneContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeWhereUniqueInput_1.Content_typeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Content_typeWhereUniqueInput_1.Content_typeWhereUniqueInput)
], DeleteOneContent_typeArgs.prototype, "where", void 0);
DeleteOneContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneContent_typeArgs);
exports.DeleteOneContent_typeArgs = DeleteOneContent_typeArgs;
