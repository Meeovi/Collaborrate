"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeCreateInput_1 = require("../../../inputs/Content_typeCreateInput");
let CreateOneContent_typeArgs = class CreateOneContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeCreateInput_1.Content_typeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Content_typeCreateInput_1.Content_typeCreateInput)
], CreateOneContent_typeArgs.prototype, "data", void 0);
CreateOneContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneContent_typeArgs);
exports.CreateOneContent_typeArgs = CreateOneContent_typeArgs;
