"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateManyInput_1 = require("../../../inputs/PagesCreateManyInput");
let CreateManyPagesArgs = class CreateManyPagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesCreateManyInput_1.PagesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPagesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPagesArgs.prototype, "skipDuplicates", void 0);
CreateManyPagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPagesArgs);
exports.CreateManyPagesArgs = CreateManyPagesArgs;
