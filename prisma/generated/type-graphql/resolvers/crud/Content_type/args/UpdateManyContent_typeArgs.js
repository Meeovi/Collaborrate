"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeUpdateManyMutationInput_1 = require("../../../inputs/Content_typeUpdateManyMutationInput");
const Content_typeWhereInput_1 = require("../../../inputs/Content_typeWhereInput");
let UpdateManyContent_typeArgs = class UpdateManyContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeUpdateManyMutationInput_1.Content_typeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Content_typeUpdateManyMutationInput_1.Content_typeUpdateManyMutationInput)
], UpdateManyContent_typeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeWhereInput_1.Content_typeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeWhereInput_1.Content_typeWhereInput)
], UpdateManyContent_typeArgs.prototype, "where", void 0);
UpdateManyContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyContent_typeArgs);
exports.UpdateManyContent_typeArgs = UpdateManyContent_typeArgs;
