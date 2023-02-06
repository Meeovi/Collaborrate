"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateManyInput_1 = require("../../../inputs/ReturnsCreateManyInput");
let CreateManyReturnsArgs = class CreateManyReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateManyInput_1.ReturnsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReturnsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReturnsArgs.prototype, "skipDuplicates", void 0);
CreateManyReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReturnsArgs);
exports.CreateManyReturnsArgs = CreateManyReturnsArgs;
