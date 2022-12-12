"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeCreateManyInput_1 = require("../../../inputs/Content_typeCreateManyInput");
let CreateManyContent_typeArgs = class CreateManyContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Content_typeCreateManyInput_1.Content_typeCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyContent_typeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyContent_typeArgs.prototype, "skipDuplicates", void 0);
CreateManyContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyContent_typeArgs);
exports.CreateManyContent_typeArgs = CreateManyContent_typeArgs;
