"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardWhereInput_1 = require("../../../inputs/DigiboardWhereInput");
let DeleteManyDigiboardArgs = class DeleteManyDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereInput_1.DigiboardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereInput_1.DigiboardWhereInput)
], DeleteManyDigiboardArgs.prototype, "where", void 0);
DeleteManyDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDigiboardArgs);
exports.DeleteManyDigiboardArgs = DeleteManyDigiboardArgs;
