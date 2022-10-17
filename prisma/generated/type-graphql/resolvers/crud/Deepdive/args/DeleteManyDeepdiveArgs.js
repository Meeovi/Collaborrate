"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveWhereInput_1 = require("../../../inputs/DeepdiveWhereInput");
let DeleteManyDeepdiveArgs = class DeleteManyDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereInput_1.DeepdiveWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereInput_1.DeepdiveWhereInput)
], DeleteManyDeepdiveArgs.prototype, "where", void 0);
DeleteManyDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDeepdiveArgs);
exports.DeleteManyDeepdiveArgs = DeleteManyDeepdiveArgs;
