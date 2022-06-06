"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceCreateManyInput_1 = require("../../../inputs/SourceCreateManyInput");
let CreateManySourceArgs = class CreateManySourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SourceCreateManyInput_1.SourceCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySourceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySourceArgs.prototype, "skipDuplicates", void 0);
CreateManySourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySourceArgs);
exports.CreateManySourceArgs = CreateManySourceArgs;
