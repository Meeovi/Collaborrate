"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyApitokenArgs_1 = require("./args/CreateManyApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyApitokenResolver = class CreateManyApitokenResolver {
    async createManyApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyApitokenArgs_1.CreateManyApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyApitokenResolver.prototype, "createManyApitoken", null);
CreateManyApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], CreateManyApitokenResolver);
exports.CreateManyApitokenResolver = CreateManyApitokenResolver;
