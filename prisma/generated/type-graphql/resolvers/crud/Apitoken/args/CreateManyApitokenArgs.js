"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenCreateManyInput_1 = require("../../../inputs/ApitokenCreateManyInput");
let CreateManyApitokenArgs = class CreateManyApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenCreateManyInput_1.ApitokenCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyApitokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyApitokenArgs.prototype, "skipDuplicates", void 0);
CreateManyApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyApitokenArgs);
exports.CreateManyApitokenArgs = CreateManyApitokenArgs;
