"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneApitokenArgs_1 = require("./args/CreateOneApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const helpers_1 = require("../../../helpers");
let CreateOneApitokenResolver = class CreateOneApitokenResolver {
    async createOneApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneApitokenArgs_1.CreateOneApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneApitokenResolver.prototype, "createOneApitoken", null);
CreateOneApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], CreateOneApitokenResolver);
exports.CreateOneApitokenResolver = CreateOneApitokenResolver;
