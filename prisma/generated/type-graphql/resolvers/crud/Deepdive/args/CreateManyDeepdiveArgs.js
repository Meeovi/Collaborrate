"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveCreateManyInput_1 = require("../../../inputs/DeepdiveCreateManyInput");
let CreateManyDeepdiveArgs = class CreateManyDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DeepdiveCreateManyInput_1.DeepdiveCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDeepdiveArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDeepdiveArgs.prototype, "skipDuplicates", void 0);
CreateManyDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDeepdiveArgs);
exports.CreateManyDeepdiveArgs = CreateManyDeepdiveArgs;
