"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeUpdateInput_1 = require("../../../inputs/Content_typeUpdateInput");
const Content_typeWhereUniqueInput_1 = require("../../../inputs/Content_typeWhereUniqueInput");
let UpdateOneContent_typeArgs = class UpdateOneContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeUpdateInput_1.Content_typeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Content_typeUpdateInput_1.Content_typeUpdateInput)
], UpdateOneContent_typeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeWhereUniqueInput_1.Content_typeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Content_typeWhereUniqueInput_1.Content_typeWhereUniqueInput)
], UpdateOneContent_typeArgs.prototype, "where", void 0);
UpdateOneContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneContent_typeArgs);
exports.UpdateOneContent_typeArgs = UpdateOneContent_typeArgs;
